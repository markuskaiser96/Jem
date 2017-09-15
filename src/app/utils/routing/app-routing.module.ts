import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './../../app.component';

const app_routes: Routes = [
  { path: 'routePath', component: AppComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

/* TODO export module, not constant */
export const app_routing = RouterModule.forRoot(app_routes);
