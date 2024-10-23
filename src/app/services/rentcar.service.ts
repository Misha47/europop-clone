import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentcarService {
  private _rentcarMainUrl = 'https://rentcar.stepprojects.ge/api/Car/'
  constructor(private _http: HttpClient) { }
  getMainData(queries?: string){
    return this._http.get(this._rentcarMainUrl+queries)
  }
}

// მანქანების გაქირავების ვებსაიტი

// [1]

// https://rentcar.stepprojects.ge/api/Car
// წამოიღებს 12 რანდომულ მანქანას

// [2]
// პაგინირებული მანქანების სია
// https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=1&pageSize=10

// [3]
// https://rentcar.stepprojects.ge/api/Car/filter?capacity=4&startYear=1995&endYear=2020&city=თბილისი&pageIndex=1&pageSize=10
// ფილტრაციის ენდფოინთი რომელიც
// ფილტრავს მანქანის ტევადობის მიხედვვით წლების მიხედვით გამოშვების წელის მიხედვით და ქალაქის მიხედვით

// [4]
// პოპულარული მანქანების სია
// https://rentcar.stepprojects.ge/api/Car/popular