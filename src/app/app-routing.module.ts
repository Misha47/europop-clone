import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuropopHomeComponent } from './europop/europop-home/europop-home.component';
import { EuropopDetailsComponent } from './europop/europop-details/europop-details.component';
import { EuropopCategoryComponent } from './europop/europop-category/europop-category.component';
import { EuropopSearchComponent } from './europop/europop-search/europop-search.component';
import { EuropopAuthorsComponent } from './europop/europop-authors/europop-authors.component';
import { EuropopAuthorsDetailsComponent } from './europop/europop-authors-details/europop-authors-details.component';
import { EuropopRegisterComponent } from './europop/europop-register/europop-register.component';
import { EuropopLoginComponent } from './europop/europop-login/europop-login.component';

const routes: Routes = [
  {
    path: "",
    component: EuropopHomeComponent
  },
  {
    path: "posts/:id",
    component: EuropopDetailsComponent
  },
  {
    path: "category/:categoryId",
    component: EuropopCategoryComponent
  },
  {
    path: "search",
    component: EuropopSearchComponent
  },
  {
    path: "authors",
    component: EuropopAuthorsComponent
  },
  {
    path: "authors/:id",
    component: EuropopAuthorsDetailsComponent
  },
  {
    path: "register",
    component: EuropopRegisterComponent
  },
  {
    path: "login",
    component: EuropopLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
