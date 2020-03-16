import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GifsComponent } from './gifs/gifs.component';
import { StickersComponent } from './stickers/stickers.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    GifsComponent,
    HomeComponent,
    StickersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
