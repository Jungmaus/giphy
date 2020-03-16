import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gif } from '../models/gif';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifService {


  private apiUrl: string;
  private apiKey: string;
  private params: HttpParams;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.giphyAPIURL;
    this.apiKey = environment.giphyAPIKey;
    this.params = new HttpParams().set("api_key", this.apiKey);
  }



  getGifs(q: string): Observable<Gif[]> {
    this.params = this.params.set("q", q);
    return this.http.get<Gif[]>(`${this.apiUrl}/gifs/search`, { params: this.params });
  }

}
