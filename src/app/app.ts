import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Index } from './pages/Index/Index';

import {GrApp} from '../gr/containers/GrApp/GrApp';

@Component({
  selector: 'app',
  directives: [RouterOutlet],
  styleUrls: ['./styles/all.css'],
  styles: [require('./app.css')],
  template: `
    <div class="gr-main">
      <router-outlet></router-outlet>
      <gr-app></gr-app>
    </div>
  `
})
@RouteConfig([
  { path: '/',  name: 'Index', component: Index,  useAsDefault: true }
])
export class App {

}
