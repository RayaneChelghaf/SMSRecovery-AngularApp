import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ListeFournisseursComponent } from '../items/liste-fournisseurs/index/liste-fournisseurs.component';
import { IndexComponent } from './index/index.component';

import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'message', redirectTo: 'message/index', pathMatch: 'full'},
  { path: 'message/index', component: IndexComponent },
  // { path: 'message/liste-fournisseurs', component: ListeFournisseursComponent },

  { path: 'message/:messageId/view', component: ViewComponent },
  { path: 'message/create', component: CreateComponent },
  { path: 'message/:messageId/edit', component: EditComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
