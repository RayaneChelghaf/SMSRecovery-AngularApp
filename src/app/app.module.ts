import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PostModule } from './post/post.module'; // Module concernant le CRUD des messages
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ListeFournisseursComponent } from './liste-fournisseurs/liste-fournisseurs.component';
import { ListeDevicesComponent } from './devices/liste-devices.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFournisseurComponent,
    ListeFournisseursComponent,
    ListeDevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
