import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-europop-author-card',
  templateUrl: './europop-author-card.component.html',
  styleUrl: './europop-author-card.component.scss'
})
export class EuropopAuthorCardComponent {
  @Input() item: any;
}
