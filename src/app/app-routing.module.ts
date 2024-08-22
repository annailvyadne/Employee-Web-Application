import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpMainComponent } from './emp-main/emp-main.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpDeleteComponent } from './emp-delete/emp-delete.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';

const routes: Routes = [
  {"path": '', component: EmpMainComponent},
  {"path": 'create', component: EmpCreateComponent},
  {"path": 'edit', component: EmpEditComponent},
  {"path": 'delete', component: EmpDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
