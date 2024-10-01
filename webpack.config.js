module.exports = {
    module: {
      rules: [
        {
          test: /\.(glsl|vs|fs)$/, // Match GLSL files
          exclude: /node_modules/,
          use: [
            {
              loader: 'glslify-loader'
            }
          ]
        }
      ]
    }
  };
  