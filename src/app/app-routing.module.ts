import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';


@NgModule({
  imports: [PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
