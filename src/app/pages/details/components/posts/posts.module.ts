import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MostPopularPostModule } from './most-popular-post/most-popular-post.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    MostPopularPostModule
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
