import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HsjlayoutComponent } from './hsjlayout/hsjlayout.component';
import { Hsjlayout1Component } from './hsjlayout1/hsjlayout1.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Hsjlayout', component: HsjlayoutComponent, },
  { path: 'Hsjlayout1', component: Hsjlayout1Component, },
  { path: 'Hsjlayout2', component: HsjlayoutComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
