module.exports = (api) => {
  const isTestEnv = api.env('test');

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
      ['babel-plugin-macros'],
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
