import { Component } from '@angular/core';
import { EuropopService } from '../../../services/europop.service';

@Component({
  selector: 'app-europop-news',
  templateUrl: './europop-news.component.html',
  styleUrl: './europop-news.component.scss'
})
export class EuropopNewsComponent {
  data: any;
  constructor(private _pop: EuropopService){
    _pop.getPosts('posts/latest').subscribe(fetched => {
      this.data = fetched;
      console.log(this.data)
    })
  }
}
