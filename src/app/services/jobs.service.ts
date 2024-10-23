import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private _http: HttpClient) { }
  private _mainUrl: string = "https://recruting.dkcapital.ge/api/public/"
  getJobs(queries: string) {
    return this._http.get(this._mainUrl + queries)
  }
  getRegionsData(){
    return this._http.get(`${this._mainUrl}vacancy/LoadRegion`)
  }
  getById(id: number) {
    return this._http.get(`${this._mainUrl}vacancy/get_by_id/${id}`);
  }
  getSearchJobs(queries:string){
    return this._http.get(`${this._mainUrl}vacancy/v2/search?${queries}`)
  }
}
