const ICONS_DIR = 'build/icons/'

const windowsOS = {
  win: {
    icon: ICONS_DIR + 'win-icon.ico',
    publisherName: 'MeatReed',
    target: 'nsis'
  },

  nsis: {
    differentialPackage: true,
    uninstallDisplayName: '3DSend'
  }
}

const linuxOS = {
  linux: {
    icon: ICONS_DIR,
    target: 'deb'
  }
}

module.exports = {
  compression: 'maximum',
  productName: '3DSend',
  appId: 'com.meatreed.3dsend',
  artifactName: '3DSend.${ext}',
  directories: {
    output: 'build'
  },
  // default files: https://www.electron.build/configuration/contents
  files: [
    'package.json',
    {
      from: 'dist/main/',
      to: 'dist/main/'
    },
    {
      from: 'dist/renderer',
      to: 'dist/renderer/'
    },
    {
      from: 'src/resources/',
      to: 'dist/resources/'
    }
  ],
  ...windowsOS,
  ...linuxOS
}
