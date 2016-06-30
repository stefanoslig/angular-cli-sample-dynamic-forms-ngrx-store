import { RouterConfig } from '@angular/router';

import { TreeViewComponent } from './index';


export const TreeViewRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/tree-view',
    terminal: true
  },
  {
      path:'tree-view',
      component:TreeViewComponent,
  }
];