import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoComponent } from './user-info.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    PhotoModule
  ],
  exports: [
    UserInfoComponent
  ]
})
export class UserInfoModule { }
