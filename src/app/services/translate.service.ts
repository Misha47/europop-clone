import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private _translateMainUrl: string = 'https://beta2.translate.ge/api/translate'
  constructor(private _http: HttpClient) { }
  translateData(fromLang: string, toLang: string, str: string){
    return this._http.get(`${this._translateMainUrl}?from=${fromLang}&to=${toLang}&str=${str}`)
  }
}
// translate API.

// გვაქვს 1 endpoint-ი

// მომხმარებელს უნდა შეეძლოს სიტყვის შემოტანა და ენის არჩევა

// თუ რა ენაზე სურს გადათარგმნა.


// [1]
// https://beta2.translate.ge/api/translate?from=ka&to=en&str=გამარჯობა

// გადათარგმნის ქართულიდან ინგლისურზე.

// სიტყვა უნდა გავატანოთ str= პარამეტრში

// [2]
// https://beta2.translate.ge/api/translate?from=ka&to=de&str=გამარჯობა

// გადათარგმნის ქართულიდან გერმანულზე

// მომხარებელს შემაოყვანინეთ სიტყვა და შემდგომ აარჩევინეთ ენა. გაუტანეთ რამოდენიმე შედეგი რაც მოდის ბექიდან

// საიტი რომლიდანაც შეგიძლია აიღოთ მაგალითი.
// https://translate.ge/ გააკეთეთ ნავ ბარი ფუტერი შეალამაზეთ მოცემული ვებსაიტი