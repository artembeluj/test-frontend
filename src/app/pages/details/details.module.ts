import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailsComponent } from './details.component';
import { PostsModule } from './components/posts/posts.module';
import { UserInfoModule } from './components/user-info/user-info.module';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    UserInfoModule,
    PostsModule,
    DetailsRoutingModule
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
