import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ListeFournisseursComponent } from './items/liste-fournisseurs/index/liste-fournisseurs.component';
import { ListeDevicesComponent } from './devices/liste-devices.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-fournisseur', component: AddFournisseurComponent },
  { path: 'liste-fournisseurs', component: ListeFournisseursComponent },
  { path: 'liste-devices', component: ListeDevicesComponent },
  // routage à mettre à jour
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
