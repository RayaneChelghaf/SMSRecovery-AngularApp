import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {AddFournisseurComponent} from './add-fournisseur/add-fournisseur.component';
import {ListeFournisseursComponent} from './items/liste-fournisseurs/index/liste-fournisseurs.component';
import {ListeDevicesComponent} from './devices/liste-devices.component';
import {ViewComponent} from "./items/liste-fournisseurs/view/view.component";
import {EditComponent} from "./items/liste-fournisseurs/edit/edit.component";

import {ViewDeviceComponent} from "./devices/view/view.component";
import {DeviceComponent} from "./message/message.component";
import { AddDeviceComponent } from './devices/add-device/add-device.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'add-fournisseur', component: AddFournisseurComponent},
    {path: 'liste-fournisseurs/:fournisseurId/view', component: ViewComponent, pathMatch: 'full'},
    {path: 'liste-fournisseurs/:fournisseurId/edit', component: EditComponent, pathMatch: 'full'},
    {path: 'liste-fournisseurs', component: ListeFournisseursComponent},
    {path: 'liste-devices', component: ListeDevicesComponent},
    {path: 'liste-devices/create', component: AddDeviceComponent},
    {path: 'liste-devices/:deviceId/view', component: ViewDeviceComponent, pathMatch: 'full'},
    {
        path: 'liste-messages',
        component: DeviceComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
