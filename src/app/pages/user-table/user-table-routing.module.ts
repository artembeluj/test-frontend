import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from '../details/details.component';
import { UserTableComponent } from './user-table.component';

const routes: Routes = [
  {
    path: '', component: UserTableComponent
  },
  {
    path: ':id', component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTableRoutingModule { }
