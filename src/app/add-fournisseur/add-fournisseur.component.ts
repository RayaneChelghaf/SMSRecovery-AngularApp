import { Component } from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {tap} from "rxjs";
import { ProviderModel } from '../fournisseurs/items';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent {
  public model :ProviderModel = {
    name : '',
    url : ''
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




export { ProviderModel };
// export interface ProviderModel {
//   id?: string;
//   name: string;
//   device: string;

// }
