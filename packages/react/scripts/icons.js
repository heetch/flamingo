const fs = require("fs");
const path = require("path");
const SVGO = require("svgo"); // eslint-disable-line import/no-extraneous-dependencies
const prettier = require("prettier"); // eslint-disable-line import/no-extraneous-dependencies
const { CLIEngine } = require("eslint"); // eslint-disable-line import/no-extraneous-dependencies

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
    { removeViewBox: false },
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
    { removeAttrs: { attrs: "(stroke|fill)" } },
  ],
});

const paths = {
  icons: path.resolve(__dirname, "../src/icons/"),
  dist: path.resolve(__dirname, "../src/constants/icons.js"),
};

function toCamelCase(str) {
  return str.replace(/-([a-z0-9])/g, group => group[1].toUpperCase());
}

function toPascalCase(str) {
  return `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
}

function formatIconName(str) {
  const prefix = "Icon";
  const iconName = toPascalCase(toCamelCase(str)).replace(".svg", "");
  return `${prefix}${iconName}`;
}

function getIconContent(icon) {
  return fs.readFileSync(`${paths.icons}/${icon}`);
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
  const { data: optimizedContent } = await svgo.optimize(content);

  return toReactComponent(name, optimizedContent);
});

Promise.all(formatIcons).then(icons => {
  const reactIcons = icons.join("");
  const output = `import React from 'react';

/* This file has been generated via the 'icons' script */
${reactIcons}`;

  const formattedOutput = prettier.format(output, { parser: "babel" });
  const { results } = eslint.executeOnText(formattedOutput, "icons.js");

  fs.writeFileSync(paths.dist, results[0].output);

  console.log("Done!"); // eslint-disable-line no-console
});
