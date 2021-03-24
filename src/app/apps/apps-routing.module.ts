import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';

import { FullComponent } from './layout/full/full.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {

    path: '',
    component:FullComponent,
    children: [
      { path: '', component: BlogComponent },
    ]
  },
  {

     path: 'login', component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
