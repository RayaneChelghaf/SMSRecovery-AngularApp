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

}
