import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostModule } from './post/post.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ListeFournisseursComponent } from './liste-fournisseurs/liste-fournisseurs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFournisseurComponent,
    ListeFournisseursComponent
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


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// import { PostModule } from './post/post.module';
// import { NavbarComponent } from './navbar/navbar.component';
// import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
// import { ListeFournisseursComponent } from './liste-fournisseurs/liste-fournisseurs.component';

// import { HomeComponent } from './home/home.component'; // Import Home Component
// import { DevicesComponent } from './devices/devices.component'; // Import Devices Component

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     AddFournisseurComponent,
//     ListeFournisseursComponent,
//     HomeComponent, // Add Home Component to declarations
//     DevicesComponent // Add Devices Component to declarations
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     PostModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
