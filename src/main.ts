import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { provideRouter }        from '@angular/router';
import { SampleAppRoutes } from './app/index';

//Devtools
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[
  provideRouter(SampleAppRoutes),
  instrumentStore(),
    devtoolsConfig({
        position: 'right',
        visible: true,
        size: 0.2
    })
]);

