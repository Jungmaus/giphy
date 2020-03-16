import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GifService } from 'src/app/core/services/gif.service';
import { Gif } from 'src/app/core/models/gif';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Output() q: EventEmitter<string> = new EventEmitter();
  searchCriteria: string = '';

  ngOnInit(): void {
  }

  search() {
    this.q.emit(this.searchCriteria);
  }

}
