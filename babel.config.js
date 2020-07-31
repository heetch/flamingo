/* eslint-disable */

module.exports = function(api) {
  var isTestEnv = api.env('test');

  return {
    exclude: 'node_modules/**',
    plugins: [
      '@babel/plugin-proposal-nullish-coalescing-operator',
      [
        'babel-plugin-styled-components',
        {
          pure: true,
        },
      ],
    ],
    presets: [
      isTestEnv
        ? [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ]
        : [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
      '@babel/preset-react',
    ],
  };
};
