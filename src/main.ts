import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import {provideNglConfig} from 'ng-lightning/ng-lightning';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, provideNglConfig(), APP_ROUTER_PROVIDERS]);

