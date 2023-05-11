import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MostPopularPostComponent } from './most-popular-post.component';

@NgModule({
  declarations: [
    MostPopularPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MostPopularPostComponent
  ]
})
export class MostPopularPostModule { }
