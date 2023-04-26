import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, take} from 'rxjs';
import {ProviderModel} from '../add-fournisseur/add-fournisseur.component';
import {Message} from "../message/message.component";
import {DeviceNameMapping} from "../services/device-name-mapping.service";

@Injectable({
    providedIn: 'root'
})
export class ProviderService {
    private baseUrl: string = '/api';

    constructor(private httpClient: HttpClient) {
    }

    public add(model: ProviderModel): Observable<boolean> {
        return this.httpClient.post<boolean>(this.baseUrl + '/provider', model).pipe(take(1));
    }
    public addDevice(model: DeviceNameMapping): Observable<boolean> {
        return this.httpClient.post<boolean>(this.baseUrl + '/provider', model).pipe(take(1));
    }

    public list(): Observable<ProviderModel[]> {
        return this.httpClient.get<ProviderModel[]>(this.baseUrl + '/provider').pipe(take(1));
    }

    public delete(id: string): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseUrl}/provider/${id}`).pipe(take(1));
    }

    public listMessages() : Observable<Message[]> {
        return this.httpClient.get<Message[]>(`${this.baseUrl}/message/list`).pipe(take(1));
    }
}
