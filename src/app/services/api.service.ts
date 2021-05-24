import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlBase = "https://api.themoviedb.org/3/";
  apikey = "0d69920111f39761eb0add216662a0d5";

  constructor(private http: HttpClient) { }

  getMovies(pages: number) {
    return this.http.get(this.urlBase + "movie/now_playing", { params: { api_key: this.apikey, page: pages.toString()} });
  }
}
