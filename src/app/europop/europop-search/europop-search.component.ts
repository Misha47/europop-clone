import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EuropopService } from '../../services/europop.service';

@Component({
  selector: 'app-europop-search',
  templateUrl: './europop-search.component.html',
  styleUrl: './europop-search.component.scss'
})
export class EuropopSearchComponent {
  data: any
  resultHeader: string = ''
  constructor(private _route: ActivatedRoute, private _pop: EuropopService){
    this._route.queryParams.subscribe(params => {
      this.resultHeader = params['query']
      _pop.getSearch(params['query']).subscribe(fetched => {
        this.data = fetched;
        console.log(fetched)
      });
    });
  }
}
