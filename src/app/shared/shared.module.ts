import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDetailComponent } from './search/search-detail/search-detail.component';
import { SearchDetailItemComponent } from './search/search-detail/search-detail-item/search-detail-item.component';
import { InlineSVGModule } from 'ng-inline-svg';


@NgModule({
  declarations: [SearchComponent, SearchDetailComponent, SearchDetailItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule
  ],
  exports: [SearchComponent, SearchDetailComponent]
})
export class SharedModule { }
