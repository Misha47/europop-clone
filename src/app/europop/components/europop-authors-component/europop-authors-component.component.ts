import { Component } from '@angular/core';
import { EuropopService } from '../../../services/europop.service';

@Component({
  selector: 'app-europop-authors-component',
  templateUrl: './europop-authors-component.component.html',
  styleUrl: './europop-authors-component.component.scss'
})
export class EuropopAuthorsComponentComponent {
  authors: any;
  constructor(private _pop: EuropopService){
    this._pop.getAuthors().subscribe(fetched => {
      this.authors = fetched;
    });
  }
}
