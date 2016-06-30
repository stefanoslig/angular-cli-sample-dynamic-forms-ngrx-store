import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {Devtools} from '@ngrx/devtools';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Sample App Stef';
}
