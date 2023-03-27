import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProviderModel} from "../add-fournisseur/add-fournisseur.component";
import {Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private baseUrl : string = '/api';
  constructor(private httpClient : HttpClient) {

  }

  public add(model : ProviderModel) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + '/provider', model)
      .pipe(take(1));
  }



  public list() : Observable<ProviderModel[]> {
    return this.httpClient.get<ProviderModel[]>(this.baseUrl + '/provider')
      .pipe(take(1));
  }

}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ProviderModel } from '../add-fournisseur/add-fournisseur.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProviderService {
//   private apiUrl = 'http://api-url.com/providers'; // l'URL de votre API pour les fournisseurs

//   constructor(private http: HttpClient) { }

//   addProvider(provider: ProviderModel): Observable<ProviderModel> {
//     return this.http.post<ProviderModel>(this.apiUrl, provider);
//   }
// }
