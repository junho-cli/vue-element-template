module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'plugins': [
    ['component',
      {
      'libraryName': 'junho-vue-ui',
      'styleLibraryName': 'themes',
      'camel2DashComponentName': false,
      'camel2UnderlineComponentName': false
      }
    ]
  ]
}
