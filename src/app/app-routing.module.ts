import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./component/list/list.component";
import {DetailComponent} from "./component/detail/detail.component";
import {EditComponent} from "./component/edit/edit.component";
import {DeleteComponent} from "./component/delete/delete.component";
import {CreateComponent} from "./component/create/create.component";

const routes: Routes = [
  {path:'list', component:ListComponent
  },
  {path:'details/:id', component:DetailComponent},
  {
    path: 'update/:id',
    component: EditComponent
  },
  {
    path:'delete/:id',
    component: DeleteComponent
  },
  {
    path:'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
