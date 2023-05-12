import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/user-table/user-table.module').then((mod) => mod.UserTableModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./pages/details/details.module').then((mod) => mod.DetailsModule)
  },
  { 
    path: '', redirectTo: '/users', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
