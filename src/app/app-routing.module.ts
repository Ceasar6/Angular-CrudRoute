import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './users/list/list.component';
import {AddComponent} from './users/add/add.component';
import {EditComponent} from './users/edit/edit.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: ':id/edit',
        component: EditComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
