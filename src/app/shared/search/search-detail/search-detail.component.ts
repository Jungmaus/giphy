import { Component, OnInit, Input } from '@angular/core';
import { SearchResultItem } from 'src/app/core/models/searchResultItem';

@Component({
  selector: 'shared-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {


  constructor() { }

  _searchResultItems: SearchResultItem[];

  @Input()
  set searchResultItems(searchResultItems: SearchResultItem[]) {
    this._searchResultItems = searchResultItems;
  }

  get searchResultItems(): SearchResultItem[] { return this._searchResultItems };



  ngOnInit(): void {  
  }

}
