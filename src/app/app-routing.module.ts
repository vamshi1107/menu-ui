import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';

const routes: Routes = [
  {
    path:"comp1",component:Comp1Component,
  }
];
export const rountecomp=[Comp1Component];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
