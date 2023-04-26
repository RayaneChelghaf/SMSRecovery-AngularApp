import {Component} from '@angular/core';
import {tap} from "rxjs";
import {DeviceNameMapping, DeviceNameMappingService} from "../../services/device-name-mapping.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-add-device',
    templateUrl: './add-device.component.html',
    styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent {
    public createDeviceNameMappingModel: DeviceNameMapping = {
        label: '',
        deviceId: ''
    }

    constructor(private deviceNameMappingService: DeviceNameMappingService, private router: Router) {

    }

    addNewModel() {
        this.deviceNameMappingService.addDeviceNameMapping(this.createDeviceNameMappingModel)
            .pipe(
                tap(t => this.createDeviceNameMappingModel.id = ''),
                tap(_ => this.router.navigate(['/liste-devices']))
            )
            .subscribe();
    }

    ngOnInit(): void {
    }

}

