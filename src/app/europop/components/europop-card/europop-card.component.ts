import { Component, Input } from '@angular/core';
import { EuropopService } from '../../../services/europop.service';

@Component({
  selector: 'app-europop-card',
  templateUrl: './europop-card.component.html',
  styleUrl: './europop-card.component.scss'
})
export class EuropopCardComponent {
  comments: any;
  @Input() itm: any
  constructor(private _pop: EuropopService) {
  }
  getComments(id: number){
    this._pop.getPostComments(this.itm.id).subscribe(fetched => {
      this.comments = fetched;
      console.log(fetched)
    })
  }
}
