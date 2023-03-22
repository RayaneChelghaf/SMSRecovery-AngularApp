import { Component } from '@angular/core';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent {

}



// import { Component } from '@angular/core';
// import { FournisseurService } from '../services/fournisseur.service';

// @Component({
// selector: 'app-add-fournisseur',
// templateUrl: './add-fournisseur.component.html',
// styleUrls: ['./add-fournisseur.component.css']
// })
// export class AddFournisseurComponent {
// nomFournisseur: string;

// constructor(private fournisseurService: FournisseurService) { }

// submitForm() {
// this.fournisseurService.addFournisseur(this.nomFournisseur);
// this.nomFournisseur = '';
// }
// }