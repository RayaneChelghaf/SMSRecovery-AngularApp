import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ListeFournisseursComponent } from './liste-fournisseurs/liste-fournisseurs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'message/index', component: IndexComponent },
  // { path: 'message/create', component: CreateComponent },
  // { path: 'devices', component: DevicesComponent },
  { path: 'add-fournisseur', component: AddFournisseurComponent },
  { path: 'liste-fournisseurs', component: ListeFournisseursComponent },
];
=======
const routes: Routes = [];
>>>>>>> parent of 0c22207 (stable version, ajout navbar avec pages fonctionnelles Liste des fournisseurs)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
