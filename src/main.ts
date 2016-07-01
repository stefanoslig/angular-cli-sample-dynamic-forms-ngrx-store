/// <reference path="../typings/browser.d.ts" />

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { provideRouter }        from '@angular/router';
import { SampleAppRoutes } from './app/index';
import { provideStore } from '@ngrx/store';
import * as APP_REDUCERS from "./app/reducers/index";
import {compose} from "@ngrx/core/compose";
import {storeLogger} from "ngrx-store-logger";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[
  provideRouter(SampleAppRoutes),
  provideStore(
  compose(
            storeLogger(), 
            combineReducers
        )({APP_REDUCERS})
      ),
  
]);

