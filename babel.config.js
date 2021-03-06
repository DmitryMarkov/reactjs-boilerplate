module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: '> 0.25%, not dead'
      }
    ],
    '@babel/react'
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ]
}
