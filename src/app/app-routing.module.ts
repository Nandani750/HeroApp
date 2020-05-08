import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailsComponent}  from './hero-details/hero-details.component';

const routes: Routes = [
  { path: 'hero', component: HeroComponent },
  {path:'dashboard', component:DashboardComponent}, 
  {path:'hero-details/:id', component:HeroDetailsComponent},
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }