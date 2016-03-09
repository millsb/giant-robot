import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/dist/zone-microtask';
import 'zone.js/dist/long-stack-trace-zone';

import { platform, ComponentRef, Injector } from 'angular2/core';
import { BROWSER_PROVIDERS, BROWSER_APP_PROVIDERS, } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, Router } from 'angular2/router';
import { provideStore } from '@ngrx/store';
import { patternsR } from './gr/reducers/patternsR';
import { makePatternData, Patterns } from './gr/models/patterns';
import { App } from './app/app';
import {ALL_PATTERNS} from './app/patterns/patterns';

platform(BROWSER_PROVIDERS).application(BROWSER_APP_PROVIDERS).bootstrap(App, [
  ROUTER_PROVIDERS,
    Patterns,
    provideStore({ patterns: patternsR }, { patterns: makePatternData(ALL_PATTERNS)})
])
.then((compRef: ComponentRef) => {
  const injector: Injector = compRef.injector;
  const router:   Router   = injector.get(Router);

  return (<any> router)._currentNavigation;
})
.then(() => {
  document.dispatchEvent(new Event('BootstrapComplete'));
});
