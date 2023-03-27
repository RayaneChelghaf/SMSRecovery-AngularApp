import { Component } from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent {
  public model :ProviderModel = {
    name : ''
  }

  constructor(private providerService : ProviderService) {

  }

  addNewModel() {


    this.providerService.add(this.model)
      .pipe(
        tap(t => this.model.name =  '')
      )
      .subscribe();
  }
}



export interface ProviderModel {
  id?: string;
  name: string;
}
