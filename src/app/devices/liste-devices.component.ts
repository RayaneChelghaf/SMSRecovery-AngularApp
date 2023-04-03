import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {ProviderModel} from "../add-fournisseur/add-fournisseur.component";
import {tap} from "rxjs";

@Component({
  selector: 'app-liste-fournisseur',
   templateUrl: './liste-devices.component.html',
styleUrls: ['./liste-devices.component.css']
})
export class ListeDevicesComponent implements OnInit{

  public items : ProviderModel[] | null = null;

  constructor(private provider : ProviderService) {

  }

  ngOnInit(): void {

    let result = this.provider.list();

    result
      .pipe(
        tap(t => this.items = t)
      )
      .subscribe();

  }

}