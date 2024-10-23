import { Component } from '@angular/core';
import { EuropopService } from '../../../services/europop.service';

@Component({
  selector: 'app-europop-newsticker',
  templateUrl: './europop-newsticker.component.html',
  styleUrl: './europop-newsticker.component.scss'
})
export class EuropopNewstickerComponent {
  news: any;
  constructor(private _pop: EuropopService) {
    this._pop.getPosts('posts/more-latest').subscribe(fetched => {
      this.news = fetched;
    });
  }
}
