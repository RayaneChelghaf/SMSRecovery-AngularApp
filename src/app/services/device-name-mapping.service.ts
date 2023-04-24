import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DeviceNameMappingService {

    private baseUrl: string = '/api';

    constructor(private httpClient: HttpClient) {
    }

    public listMapping() : Observable<DeviceNameMapping[]> {
        return this.httpClient.get<DeviceNameMapping[] >(`${this.baseUrl}/device-name-mapping`)
            .pipe(take(1));
    }
}

export interface DeviceNameMapping {
    id : string ;
    label? : string;
    deviceId? : string ;
}

