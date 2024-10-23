import { Component } from '@angular/core';
import { EuropopService } from '../../services/europop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-europop-authors-details',
  templateUrl: './europop-authors-details.component.html',
  styleUrl: './europop-authors-details.component.scss'
})
export class EuropopAuthorsDetailsComponent {
  authorDetails: any
  authorCategoryIds: any;
  posts: any
  authorId: any;
  currentCategoryId!: number;
  constructor(private _pop: EuropopService, private _route: ActivatedRoute){
    this._route.params.subscribe((params) => {
      let id = params['id'];
      this.authorId = id;

      this._pop.getAuthorsCategories(id).subscribe((fetched: any) => {
        this.authorCategoryIds = fetched;
        console.log(this.authorCategoryIds.data)
        this._pop.getAuthorPosts(id, fetched.data[0].id).subscribe((post: any) => {
          this.posts = post.data;
        });
      })
      
      this._pop.getAuthorsById(id).subscribe(fetched => {
        this.authorDetails = fetched;
        console.log(this.authorDetails)
        
      })

    });
  }
  getPosts(id: number){
    this.currentCategoryId = id
    this._pop.getAuthorPosts(this.authorId, this.currentCategoryId).subscribe((fetched: any) => {
      this.posts = fetched.data;
    });
    setTimeout(() => {

      (<HTMLInputElement>document.querySelector(".tab-pane")).classList.add("show", "active")
    }, 1000)
  }
}
