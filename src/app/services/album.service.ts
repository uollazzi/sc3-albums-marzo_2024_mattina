import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Foto } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  private BASE_URL = "https://jsonplaceholder.typicode.com/";

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.BASE_URL + "albums");
  }

  getPhotosByAlbumId(id: number): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.BASE_URL + "photos?albumId=" + id);
  }
}
