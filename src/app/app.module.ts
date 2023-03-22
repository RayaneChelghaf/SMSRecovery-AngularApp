import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> parent of 0c22207 (stable version, ajout navbar avec pages fonctionnelles Liste des fournisseurs)

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/containers/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
    ])
=======

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> parent of 0c22207 (stable version, ajout navbar avec pages fonctionnelles Liste des fournisseurs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule { }
>>>>>>> parent of 0c22207 (stable version, ajout navbar avec pages fonctionnelles Liste des fournisseurs)
