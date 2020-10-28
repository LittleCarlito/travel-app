import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripPlannerComponent } from './trip-planner/trip-planner.component';
import {  AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:  '', pathMatch:  'full',redirectTo:  'about'},
  {path: 'trip-planner', component: TripPlannerComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
