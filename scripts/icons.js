const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo'); // eslint-disable-line import/no-extraneous-dependencies
const prettier = require('prettier'); // eslint-disable-line import/no-extraneous-dependencies
const { CLIEngine } = require('eslint'); // eslint-disable-line import/no-extraneous-dependencies

const eslint = new CLIEngine({ fix: true });

const paths = {
  icons: path.resolve(__dirname, '../src/icons/'),
  dist: path.resolve(__dirname, '../src/constants/icons.js'),
};

function toCamelCase(str) {
  return str.replace(/-([a-z0-9])/g, group => group[1].toUpperCase());
}

function toPascalCase(str) {
  return `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
}

function formatIconName(str) {
  const prefix = 'Icon';
  const iconName = toPascalCase(toCamelCase(str)).replace('.svg', '');
  return `${prefix}${iconName}`;
}

function getIconContent(icon) {
  return fs.readFileSync(`${paths.icons}/${icon}`, { encoding: 'utf8' });
}

function toReactComponent(name, content) {
  return `
export const ${name} = (
  ${content}
);
`;
}

const iconsPath = fs.readdirSync(paths.icons);

const formatIcons = iconsPath.map(async iconPath => {
  const name = formatIconName(iconPath);
  const content = getIconContent(iconPath);
  const { data: optimizedContent } = optimize(content, {
    path: iconPath,
    plugins: [
      { name: 'removeViewBox', active: false },
      { name: 'convertStyleToAttrs', active: true },
      { name: 'removeDimensions', active: true },
      { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
    ],
  });

  return toReactComponent(name, optimizedContent);
});

Promise.all(formatIcons).then(icons => {
  const reactIcons = icons.join('');
  const output = `import React from 'react';

/* This file has been generated via the 'icons' script */
${reactIcons}`;

  const formattedOutput = prettier.format(output, { parser: 'babel' });
  const { results } = eslint.executeOnText(formattedOutput, 'icons.js');

  fs.writeFileSync(paths.dist, results[0].output);

  console.log('Done!'); // eslint-disable-line no-console
});
