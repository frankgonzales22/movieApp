import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'St. Peter Life Plan eStore',
  webDir: 'dist',
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "serverClientId": "61798046603-fvtf465vaeqlnp4ppp2a6803uehs6imv.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    }
  }

};

export default config;
