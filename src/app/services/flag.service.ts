import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  private _flagUrl: string = "https://restcountries.com/v3.1/currency/"
  constructor(private _http: HttpClient) { }
  getFlag(curr?: string){
    return this._http.get<any[]>(this._flagUrl+curr)
  }
}
