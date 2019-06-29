export default {
  apiUrl: 'http://yoursite.com/api/',
  google: {
    analyticsKey: 'UA-xxxxxxxxx-1'
  }
};

const siteConfig = {
  siteName: 'ISOMORPHIC',
  siteIcon: 'ion-flash',
  dashboard: '/dashboard',
  footerText: 'Isomorphic ©2017 Created by RedQ, Inc'
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault'
};
const language = 'english';
const langDir = 'ltr';
const AlgoliaSearchConfig = {
  appId: '',
  apiKey: ''
};
const jwtConfig = {
  enabled: false,
  fetchUrl: 'http://localhost:5000/login',
  secretKey: 'secretKey'
};
const Auth0Config = {
  domain: '',
  clientID: '',
  audience: '',
  options: {
    auth: {
      autoParseHash: true,
      redirect: false
    },
    languageDictionary: {
      title: 'Isomorphic',
      emailInputPlaceholder: '',
      passwordInputPlaceholder: ''
    },
    icon: '',
    theme: {
      labeledSubmitButton: true,
      logo: '',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000',
          icon: undefined
        }
      }
    }
  }
};
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};
const googleConfig = {
  apiKey: '' //
};
const mapboxConfig = {
  tileLayer:
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  accessToken:
    '',
  id: 'mapbox.streets',
  maxZoom: 18,
  defaultZoom: 11,
  center: [40.706877, -74.011265]
};
const youtubeSearchApi = '';
export {
  siteConfig,
  language,
  themeConfig,
  AlgoliaSearchConfig,
  jwtConfig,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi,
  langDir
};
