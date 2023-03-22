// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  import { HomeComponent } from './home.component';
// import { IndexComponent } from './index/index.component';
// import { CreateComponent } from './create/create.component';
// import { DevicesComponent } from './devices/devices.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ListeFournisseursComponent } from './liste-fournisseurs/liste-fournisseurs.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'message/index', component: IndexComponent },
  // { path: 'message/create', component: CreateComponent },
  // { path: 'devices', component: DevicesComponent },
  { path: 'add-fournisseur', component: AddFournisseurComponent },
  { path: 'liste-fournisseurs', component: ListeFournisseursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }