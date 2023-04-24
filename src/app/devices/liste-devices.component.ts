import {Component, OnInit} from '@angular/core';
import {DeviceNameMapping, DeviceNameMappingService} from "../services/device-name-mapping.service";
import {  tap} from "rxjs";

@Component({
    selector: 'app-liste-fournisseur',
    templateUrl: './liste-devices.component.html',
    styleUrls: ['./liste-devices.component.css']
})
export class ListeDevicesComponent implements OnInit {

    public items : DeviceNameMapping[] | null  = null;

    constructor(private deviceNameMappingService: DeviceNameMappingService) {

    }

    ngOnInit(): void {
        this.deviceNameMappingService.listMapping().pipe(
            tap(t => this.items = t)
        ).subscribe();
    }

}
