import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import {AppComponent} from './app.component';
import {ViewDeviceComponent} from "./devices/view/view.component";
import {DeviceComponent} from './message/message.component';
import {AddDeviceComponent} from "./devices/add-device/add-device.component";
import {NavbarComponent} from './navbar/navbar.component';
import {ViewComponent} from "./items/liste-fournisseurs/view/view.component";
import {EditComponent} from "./items/liste-fournisseurs/edit/edit.component";
import {AddFournisseurComponent} from './add-fournisseur/add-fournisseur.component';
import {ListeFournisseursComponent} from './items/liste-fournisseurs/index/liste-fournisseurs.component';
import {ListeDevicesComponent} from './devices/liste-devices.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";



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
        MatInputModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
