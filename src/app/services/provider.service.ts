import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { ProviderModel } from '../add-fournisseur/add-fournisseur.component';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private baseUrl: string = '/api';

  constructor(private httpClient: HttpClient) { }

  public add(model: ProviderModel): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + '/provider', model).pipe(take(1));
  }

  public list(): Observable<ProviderModel[]> {
    return this.httpClient.get<ProviderModel[]>(this.baseUrl + '/provider').pipe(take(1));
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/provider/${id}`).pipe(take(1));
  }
}
