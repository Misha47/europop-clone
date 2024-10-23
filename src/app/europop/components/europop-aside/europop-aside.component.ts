import { Component, Input } from '@angular/core';
import { EuropopService } from '../../../services/europop.service';

@Component({
  selector: 'app-europop-aside',
  templateUrl: './europop-aside.component.html',
  styleUrl: './europop-aside.component.scss'
})
export class EuropopAsideComponent {
  latestNews: any;
  openSocials: boolean = false
  @Input() endpointForLatestNews: string = ''
  @Input() latestNewsHeader: string = ''
  constructor(private _pop: EuropopService){
    setTimeout(()  => {
      this.openSocials = true;
    }, 2000);

  }
}
