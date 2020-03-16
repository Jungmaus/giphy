import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule { }
