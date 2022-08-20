import 'dotenv/config';

export default {
  "name": "Visionn'air",
  "slug": "visionn-air",
  "owner": "eloxfire",
  "version": "1.1.0",
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
      "backgroundColor": "#034732"
    },
    "package": "fr.eloxfire.visionnair",
    "versionCode": 2
  },
  "web": {
    "favicon": "./assets/favicon.png"
  }
}
