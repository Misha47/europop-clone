import { Component } from '@angular/core';
import { EuropopService } from '../../services/europop.service';
import { NavSearchPipe } from '../../pipes/nav-search.pipe';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-europop-nav',
  templateUrl: './europop-nav.component.html',
  styleUrl: './europop-nav.component.scss',  
})
export class EuropopNavComponent {
  categoryMenyIndex: number = 1;
  filterKey = ""
  posts: any
  interests: any
  authors: any
  isInputMenuOpen = false;
  isDropdownOpen(){
    !this.isInputMenuOpen
  }
  constructor(private _pop: EuropopService, private _router: Router, private _route: ActivatedRoute){
    this._pop.getSearch(this.filterKey.toLowerCase()).subscribe((fetched: any) => {
      this.posts = fetched.data.posts
      this.interests = fetched.data.interests
      this.authors = fetched.data.authors
    })
    this._pop.getAuthorsById(205).subscribe(auths => {
    })
  }
  getMiniSearch(e: any){
    this._pop.getSearch(this.filterKey.toLowerCase()).subscribe((fetched: any) => {
      this.posts = fetched.data.posts
      this.interests = fetched.data.interests
      this.authors = fetched.data.authors

    })
    if(e.key === "Enter"){
      this._router.navigate(['/europop/search'], { queryParams: { query: this.filterKey } })
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    }
  }
  categoryDropdownOpen(menuIndex: number){
    this.categoryMenyIndex = menuIndex
  }
}
