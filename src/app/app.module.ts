import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NavbarComponent} from './navbar/navbar.component';
import {AddFournisseurComponent} from './add-fournisseur/add-fournisseur.component';
import {ListeFournisseursComponent} from './items/liste-fournisseurs/index/liste-fournisseurs.component';
import {ListeDevicesComponent} from './devices/liste-devices.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ViewComponent} from "./items/liste-fournisseurs/view/view.component";
import {EditComponent} from "./items/liste-fournisseurs/edit/edit.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ViewDeviceComponent} from "./devices/view/view.component";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {DeviceComponent} from './message/message.component';
import {AddDeviceComponent} from "./devices/add-device/add-device.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AddFournisseurComponent,
        ListeFournisseursComponent,
        ListeDevicesComponent,
        ViewComponent,
        EditComponent,
        ViewDeviceComponent,
        DeviceComponent,
        AddDeviceComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,

        // Angular Material modules
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
