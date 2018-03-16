// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCObfpkX5uJPtMdYwNaWC760JlYW9ja0_A",
    authDomain: "todolistapp-27efe.firebaseapp.com",
    databaseURL: "https://todolistapp-27efe.firebaseio.com",
    projectId: "todolistapp-27efe",
    storageBucket: "todolistapp-27efe.appspot.com",
    messagingSenderId: "678498574097"
  }
};
