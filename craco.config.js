module.exports = {
    babel: {
      plugins: [
        ['@babel/plugin-transform-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ]
    }
  };
  