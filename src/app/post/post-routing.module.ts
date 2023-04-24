import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'liste-devices', redirectTo: 'liste-devices/index', pathMatch: 'full'},
  { path: 'liste-devices/index', component: IndexComponent },

  { path: 'liste-devices/:messageId/view', component: ViewComponent },
  { path: 'liste-devices/create', component: CreateComponent },
  { path: 'liste-devices/:messageId/edit', component: EditComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
