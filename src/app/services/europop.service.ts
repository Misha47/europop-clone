import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EuropopService {
  private _mainUrl: string = 'http://localhost:2000/proxy?targetUrl=https://europop.ge/api/' 
  constructor(private _http: HttpClient) { }
  getMenuDropdown(){
    return this._http.get(`${this._mainUrl}menu-categories?depth=3&menuType=DROPDOWN`)
  }
  getPosts(queries: string) {
    return this._http.get(this._mainUrl + queries)
  }
  getPostComments(id: number) {
    return this._http.get(`${this._mainUrl}posts/${id}/comments`)
  }

  getById(id: number) {
    return this._http.get(`${this._mainUrl}posts/${id}`);
  }
  getSearch(queries:string){
    return this._http.get(`${this._mainUrl}search?query=${queries}`)
  }
  getCategoryInfo(id: any) {
    return this._http.get(`${this._mainUrl}categories/${id}`)
  }
  getPostsByCategory(queries:any) {
    return this._http.get(`${this._mainUrl}posts/by-category-id?categoryId=${queries}`)
  }
  getAuthors(){
    return this._http.get(`${this._mainUrl}authors?page=1&size=3`)
  }
  getAuthorsById(id: number){
    return this._http.get(`${this._mainUrl}authors/${id}`)
  }
  getAuthorsCategories(id: any){
    return this._http.get(`${this._mainUrl}authors/${id}/categories`)
  }
  getAuthorPosts(authorId: number, categoryId: number){
    return this._http.get(`${this._mainUrl}authors/${authorId}/resources?categoryId=${categoryId}&query=&page=1`)
  }
}
