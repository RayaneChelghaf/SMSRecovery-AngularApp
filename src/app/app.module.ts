import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PostModule } from './post/post.module'; // Module concernant le CRUD des messages
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ListeFournisseursComponent } from './items/liste-fournisseurs/index/liste-fournisseurs.component';
import { ListeDevicesComponent } from './devices/liste-devices.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ViewComponent} from "./items/liste-fournisseurs/view/view.component";
import {EditComponent} from "./items/liste-fournisseurs/edit/edit.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFournisseurComponent,
    ListeFournisseursComponent,
    ListeDevicesComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
