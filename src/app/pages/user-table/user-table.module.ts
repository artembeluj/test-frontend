import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DetailsModule } from '../details/details.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UserTableRoutingModule } from './user-table-routing.module';
import { UserTableComponent } from './user-table.component';

@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    UserTableRoutingModule,
    HttpClientModule,
    DetailsModule,
    MaterialModule
  ]
})
export class UserTableModule { }
