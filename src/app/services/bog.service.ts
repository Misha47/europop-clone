import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BogService {
  private _currencyUrl = "https://bankofgeorgia.ge/api/currencies/"
  private _loanUrl = "https://bankofgeorgia.ge/api/main-page/calculate?"
  constructor(private _http: HttpClient) {}
  getData(queries?: string){
    return this._http.get<any>(this._currencyUrl + queries)
  }
  getLoanResultData(queries: string){
    return this._http.get(this._loanUrl+queries)
  }
}
