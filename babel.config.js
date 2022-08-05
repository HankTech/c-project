module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '*': '.',
          '@': './src',
          '@assets': './src/assets',
          '@fonts': './src/assets/fonts',
          '@images': './src/assets/images',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@layouts': './src/layouts',
          '@screens': './src/screens',
          '@store': './src/store',
          '@theme': './src/theme',
          '@utils': './src/utils'
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js'
        ]
      }
    ]
  ]
}
