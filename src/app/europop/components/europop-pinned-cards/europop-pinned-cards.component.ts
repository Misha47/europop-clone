import { Component } from '@angular/core';
import { EuropopService } from '../../../services/europop.service';

@Component({
  selector: 'app-europop-pinned-cards',
  templateUrl: './europop-pinned-cards.component.html',
  styleUrl: './europop-pinned-cards.component.scss'
})
export class EuropopPinnedCardsComponent {
  data: any
  comments: any
  constructor(private _pinned: EuropopService){
    _pinned.getPosts('featured-posts').subscribe(fetched => { 
      this.data = fetched
    })
  }
  getConsole(){
    console.log(this.data)
  }
  getComments(id: number){
    this._pinned.getPostComments(id).subscribe(fetched => {
      this.comments = fetched;
      console.log(fetched)
    })
  }
}
