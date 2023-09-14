import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  private urlApi = 'https://rickandmortyapi.com/api/character/564,305,1,12';
  constructor(private http: HttpClient) { }

  getCharacter(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
