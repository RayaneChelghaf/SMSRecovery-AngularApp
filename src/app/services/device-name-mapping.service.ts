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

    public listMapping(): Observable<DeviceNameMapping[]> {
        return this.httpClient.get<DeviceNameMapping[]>(`${this.baseUrl}/device-name-mapping`)
            .pipe(take(1));
    }

    public addDeviceNameMapping(model: DeviceNameMapping): Observable<string> {
        return this.httpClient.post<string>(`${this.baseUrl}/device-name-mapping`, model)
            .pipe(take(1));
    }

    public deleteDeviceNameMapping(id: string): Observable<boolean> {

        return this.httpClient.delete<boolean>(`${this.baseUrl}/device-name-mapping/${id}`)
            .pipe(take(1));
    }
}

export interface DeviceNameMapping {
    id?: string;
    label?: string;
    deviceId?: string;
}

