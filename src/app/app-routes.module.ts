import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoogleDistanceComponent } from './modules/GoogleDistance/app.component';
import { CalculatorComponent } from './modules/calculator/app.component';
import { HomeComponent }   from './home/app.component';
import { Error404Component }   from './error404/app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'google-distance', component: GoogleDistanceComponent },
  { path: 'Error404', component: Error404Component },
  { path: '**', redirectTo: '/Error404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
