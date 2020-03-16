import { Component, OnInit, Input } from '@angular/core';
import { GifService } from 'src/app/core/services/gif.service';
import { Gif } from 'src/app/core/models/gif';
import { SearchResultItem } from 'src/app/core/models/searchResultItem';

@Component({
  selector: 'pages-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(
    private gifService: GifService
  ) { }

  searchResultItems: SearchResultItem[];
  private gifs: Gif[];

  ngOnInit(): void {
  }

  onSearch(e) {
    this.gifService.getGifs(e).subscribe(res => {
      this.gifs = res['data'];
      this.searchResultItems = [];

      let item: SearchResultItem;
      this.gifs.map(x => {
          item = new SearchResultItem();
          item.embed_url = x.embed_url;
          item.id = x.id;
          item.import_datetime = x.import_datetime;
          item.title = x.title;
          item.url = x.url;
          this.searchResultItems.push(item);
      });

    });
  }

}
