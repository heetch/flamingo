const fs = require('fs');
const path = require('path');
const SVGO = require('svgo'); // eslint-disable-line import/no-extraneous-dependencies
const prettier = require('prettier'); // eslint-disable-line import/no-extraneous-dependencies
const { CLIEngine } = require('eslint'); // eslint-disable-line import/no-extraneous-dependencies

const eslint = new CLIEngine({ fix: true });

const svgo = new SVGO({
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: true },
    { cleanupEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: false },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: '(stroke|fill)' } },
  ],
});

const paths = {
  icons: path.resolve(__dirname, '../src/icons/'),
  dist: path.resolve(__dirname, '../.storybook/theme/icons.js'),
};

function toCamelCase(str) {
  return str.replace(/-([a-z0-9])/g, group => group[1].toUpperCase());
}

function formatIconName(str) {
  return toCamelCase(str).replace('.svg', '');
}

function getIconContent(icon) {
  return fs.readFileSync(`${paths.icons}/${icon}`);
}

function toReactComponent(name, content) {
  return `
${name}: {
  path: ${content},
  viewBox: '0 0 24 24',
},`;
}

const iconsPath = fs.readdirSync(paths.icons);

const formatIcons = iconsPath.map(async iconPath => {
  const name = formatIconName(iconPath);
  const content = getIconContent(iconPath);
  const { data: optimizedContent } = await svgo.optimize(content);

  return toReactComponent(name, optimizedContent);
});

Promise.all(formatIcons).then(icons => {
  const reactIcons = icons.join('');
  const output = `import * as React from 'react';

/*
 * This file has been automatically generated.
 * Do not update it manually, run 'yarn icons' instead.
 */

export default {
  ${reactIcons}
}`;

  const formattedOutput = prettier.format(output, { parser: 'babel' });
  const { results } = eslint.executeOnText(formattedOutput, 'icons.js');

  fs.writeFileSync(paths.dist, results[0].output);

  console.log('Done!'); // eslint-disable-line no-console
});
