import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'final-projects';
  theme: string | null = localStorage.getItem('theme')
  constructor(){
    if(!this.theme){
      document.body.setAttribute('data-bs-theme', 'light')
    }else{
      document.body.setAttribute('data-bs-theme', this.theme)
    }
    localStorage.setItem('theme', 'dark')
  }
}
