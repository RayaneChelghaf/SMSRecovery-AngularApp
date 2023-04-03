import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeFournisseursComponent } from '../items/liste-fournisseurs/liste-fournisseurs.component';
import { IndexComponent } from './index/index.component';

import { ViewComponent } from '../items/liste-fournisseurs/view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'liste-fournisseurs', redirectTo: 'liste-fournisseurs/index', pathMatch: 'full'},
  { path: 'liste-fournisseurs/index', component: IndexComponent },
  { path: 'message/liste-fournisseurs', component: ListeFournisseursComponent },

  { path: 'liste-fournisseurs/:messageId/view', component: ViewComponent },
  { path: 'liste-fournisseurs/create', component: CreateComponent },
  { path: 'liste-fournisseurs/:messageId/edit', component: EditComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
