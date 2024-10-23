import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { EuropopService } from '../../../services/europop.service';

@Component({
  selector: 'app-europop-comments',
  templateUrl: './europop-comments.component.html',
  styleUrl: './europop-comments.component.scss'
})
export class EuropopCommentsComponent {
  @Input() id!: number;
  data: any
  constructor(private _pop: EuropopService){}
  getComments(){
    this._pop.getPostComments(this.id).subscribe(fetched => {
      this.data = fetched;
    })
  }
}
