import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { GifsComponent } from './gifs/gifs.component';
import { StickersComponent } from './stickers/stickers.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  {
      path: 'gifs',
      component: GifsComponent
  },
  {
    path: 'stickers',
    component: StickersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ ],
  declarations: [HomeComponent]
})
export class PagesRoutingModule { }
