module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'], // Add other presets you use
    plugins: [
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ],
  };
  