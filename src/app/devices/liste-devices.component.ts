import {Component, OnInit} from '@angular/core';
import {DeviceNameMapping, DeviceNameMappingService} from "../services/device-name-mapping.service";
import {Observable, switchMap, tap} from "rxjs";

@Component({
    selector: 'app-liste-fournisseur',
    templateUrl: './liste-devices.component.html',
    styleUrls: ['./liste-devices.component.css']
})
export class ListeDevicesComponent implements OnInit {

    public items: DeviceNameMapping[] | null = null;

    constructor(private deviceNameMappingService: DeviceNameMappingService) {

    }

    ngOnInit(): void {
        this.refreshMappingList().subscribe();
    }

    private refreshMappingList(): Observable<DeviceNameMapping[]> {
        return this.deviceNameMappingService.listMapping().pipe(
            tap(t => this.items = t)
        )
    }

    deleteDeviceNameMapping(id: string) {
        if (confirm("Voulez-vous vraiment supprimer cette correspondance?")) {
            this.deviceNameMappingService.deleteDeviceNameMapping(id)
                .pipe(
                    switchMap(_ => this.refreshMappingList())
                )
                .subscribe();
        }
    }
}
