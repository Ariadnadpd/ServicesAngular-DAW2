import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarwarsDataInternal } from '../models/starwars-data';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  // GET
  getStarWarsList(): Observable<any>{
    return this.http.get<{results: Array<StarwarsDataInternal>}>('https://swapi.dev/api/people');
  }
}


