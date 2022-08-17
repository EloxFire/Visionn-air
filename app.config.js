import 'dotenv/config';

export default {
  "name": "visionn-air",
  "slug": "visionn-air",
  "owner": "eloxfire",
  "version": process.env.REACT_APP_VERSION,
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "userInterfaceStyle": "light",
  "splash": {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#034732"
  },
  "updates": {
    "fallbackToCacheTimeout": 0
  },
  "assetBundlePatterns": [
    "**/*"
  ],
  "ios": {
    "supportsTablet": true,
    "bundleIdentifier": "fr.eloxfire.visionnair"
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#FFFFFF"
    },
    "package": "fr.eloxfire.visionnair",
    "versionCode": parseInt(process.env.REACT_APP_VERSION_CODE)
  },
  "web": {
    "favicon": "./assets/favicon.png"
  }
}
