// eslint-disable-next-line
const alias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: alias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
}
