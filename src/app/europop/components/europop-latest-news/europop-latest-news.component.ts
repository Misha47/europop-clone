import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EuropopService } from '../../../services/europop.service';

@Component({
  selector: 'app-europop-latest-news',
  templateUrl: './europop-latest-news.component.html',
  styleUrl: './europop-latest-news.component.scss'
})
export class EuropopLatestNewsComponent {
  @Input() header: string = 'home';
  data: any;
  @Input() endpoint: string = ''
  tags: any = [];
  constructor(private _pop: EuropopService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['endpoint']){
      if(Array.isArray(changes['endpoint'].currentValue)){
        this.data = [];
        changes['endpoint'].currentValue.forEach((itm: any, index) => {
          this.tags.push(itm)
          this._pop.getPostsByCategory(itm.id).subscribe((fetched: any) => {
            if(fetched.data[index]){

              this.data.push(fetched.data[index]);
            }
          })
        })

      }
      if(typeof changes['endpoint'].currentValue === 'string'){

        this._pop.getPosts(changes['endpoint'].currentValue).subscribe(fetched => {
          this.data = fetched;
        })
      }
    }
  }

}
