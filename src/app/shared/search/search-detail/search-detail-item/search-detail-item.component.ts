import { Component, OnInit, Input } from '@angular/core';
import { SearchResultItem } from 'src/app/core/models/searchResultItem';

@Component({
  selector: 'shared-search-detail-item',
  templateUrl: './search-detail-item.component.html',
  styleUrls: ['./search-detail-item.component.css']
})
export class SearchDetailItemComponent implements OnInit {

  constructor() { }

  @Input() searchResultItem: SearchResultItem;

  ngOnInit(): void {
  }

}
