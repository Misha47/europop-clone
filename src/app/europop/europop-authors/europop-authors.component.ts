import { Component } from '@angular/core';
import { EuropopService } from '../../services/europop.service';

@Component({
  selector: 'app-europop-authors',
  templateUrl: './europop-authors.component.html',
  styleUrl: './europop-authors.component.scss'
})
export class EuropopAuthorsComponent {
  authors: any;
  constructor(private _pop: EuropopService){
    _pop.getAuthors().subscribe(fetched => {
      this.authors = fetched
      console.log(fetched)
    })
  }
}
