import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DeviceDetectedService {

    private baseUrl: string = '/api';

    constructor(private httpClient: HttpClient) {
    }

    public listMapping(): Observable<DeviceDetected[]> {
        return this.httpClient.get<DeviceDetected[]>(`${this.baseUrl}/device-detected`)
            .pipe(take(1));
    }

    // public addDeviceDetected(model: DeviceDetected): Observable<string> {
    //     return this.httpClient.post<string>(`${this.baseUrl}/device-detected`, model)
    //         .pipe(take(1));
    // }

    // public deleteDeviceDetected(id: string): Observable<boolean> {

    //     return this.httpClient.delete<boolean>(`${this.baseUrl}/device-detected/${id}`)
    //         .pipe(take(1));
    // }
}

export interface DeviceDetected {
    providerUrl?: string;
    label?: string;
    deviceId?: string;
}

