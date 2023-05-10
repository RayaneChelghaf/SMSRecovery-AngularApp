import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {ProviderModel} from "../add-fournisseur/add-fournisseur.component";
import {Observable, tap} from "rxjs";
import {DeviceDetectedService, DeviceDetected} from "../devicedetect/device-detected.service";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


    public items: DeviceDetected[] | null = null;

    constructor(private deviceDetectedService: DeviceDetectedService) {

    }

    ngOnInit(): void {
        this.refreshMappingList().subscribe();
    }

    private refreshMappingList(): Observable<DeviceDetected[]> {
        return this.deviceDetectedService.listMapping().pipe(
            tap(t => this.items = t)
        )
    }  
  }











// import {Component, OnInit} from '@angular/core';
// import {ProviderService} from "../services/provider.service";
// import {ProviderModel} from "../add-fournisseur/add-fournisseur.component";
// import {Observable, tap} from "rxjs";
// import {DeviceDetectedService, DeviceDetected} from "../devicedetected/device-detected.service";


// @Component({
//     selector: 'app-home',
//     templateUrl: './home.component.html',
//     styleUrls: ['./home.component.css']
// })

// export class HomeComponent implements OnInit {


//     public items: DeviceDetected[] | null = null;

//     constructor(private deviceDetectedService: DeviceDetectedService) {

//     }

//     ngOnInit(): void {
//         this.refreshMappingList().subscribe();
//     }

//     private refreshMappingList(): Observable<DeviceDetected[]> {
//         return this.deviceDetectedService.listMapping().pipe(
//             tap(t => this.items = t)
//         )
//     }  

//     //DeviceNameMapping

//   }