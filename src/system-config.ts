// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'ng-lightning/ng-lightning': 'vendor/ng-lightning',
  'ts-helpers': 'vendor/ts-helpers',
  'tether': 'vendor/tether',
  'stompjs': 'vendor/stompjs'
};

/** User packages configuration. */
const packages: any = {
  'ng-lightning/ng-lightning': {
      main: 'ng-lightning.js',
      format: 'cjs'
    },
  'tether': {
      main: 'dist/js/tether.js',
      format: 'cjs'
    },
  'ts-helpers': {
      main: 'index.js',
      format: 'cjs'
    },
  'stompjs': {
    main: 'lib/stomp.js',
    format: 'cjs'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/banner',
  'app/navigation',
  'app/footer',
  'app/information',
  'app/transmission',
  'app/settings/general',
  'app/settings/listener',
  'app/settings/contact',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
