import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuropopPinnedCardsComponent } from './europop/components/europop-pinned-cards/europop-pinned-cards.component';
import { EuropopCardComponent } from './europop/components/europop-card/europop-card.component'; 
import { EuropopHomeComponent } from './europop/europop-home/europop-home.component';
import { EuropopDetailsComponent } from './europop/europop-details/europop-details.component'; 
import { EuropopNewsComponent } from './europop/components/europop-news/europop-news.component'; 
import { EuropopCommentsComponent } from './europop/components/europop-comments/europop-comments.component'; 
import { EuropopNewstickerComponent } from './europop/components/europop-newsticker/europop-newsticker.component'; 
import { EuropopAsideComponent } from './europop/components/europop-aside/europop-aside.component'; 
import { EuropopCategoryComponent } from './europop/europop-category/europop-category.component';
import { EuropopSearchComponent } from './europop/europop-search/europop-search.component'; 
import { EuropopLatestNewsComponent } from './europop/components/europop-latest-news/europop-latest-news.component';
import { EuropopAuthorsComponentComponent } from './europop/components/europop-authors-component/europop-authors-component.component';
import { EuropopAuthorsDetailsComponent } from './europop/europop-authors-details/europop-authors-details.component';
import { EuropopAuthorsComponent } from './europop/europop-authors/europop-authors.component';
import { EuropopAuthorCardComponent } from './europop/components/europop-author-card/europop-author-card.component';
import { EuropopFooterComponent } from './europop/components/europop-footer/europop-footer.component';
import { EuropopLoginComponent } from './europop/europop-login/europop-login.component';
import { EuropopRegisterComponent } from './europop/europop-register/europop-register.component';
import { EuropopNavComponent } from './europop/europop-nav/europop-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EuropopNavComponent,
    EuropopPinnedCardsComponent,
    EuropopCardComponent,
    EuropopHomeComponent,
    EuropopDetailsComponent,
    EuropopNewsComponent,
    EuropopCommentsComponent,
    EuropopNewstickerComponent,
    EuropopAsideComponent,
    EuropopCategoryComponent,
    EuropopSearchComponent,
    EuropopLatestNewsComponent,
    EuropopAuthorsComponentComponent,
    EuropopAuthorsDetailsComponent,
    EuropopAuthorsComponent,
    EuropopAuthorCardComponent,
    EuropopFooterComponent,
    EuropopLoginComponent,
    EuropopRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
