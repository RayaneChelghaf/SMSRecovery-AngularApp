import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../../../services/provider.service";
import {ProviderModel} from "../../../add-fournisseur/add-fournisseur.component";
import {tap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ViewComponent} from "../view/view.component";
import {EditComponent} from "../edit/edit.component";

@Component({
  selector: 'app-liste-fournisseurs',
  templateUrl: './liste-fournisseurs.component.html',
  styleUrls: ['./liste-fournisseurs.component.css']
})
export class ListeFournisseursComponent implements OnInit{

  public items : ProviderModel[] | null = null;

  constructor(
    private provider : ProviderService
    // ,
    // private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    let result = this.provider.list();

    result
      .pipe(
        tap(t => this.items = t)
      )
      .subscribe();

  }

  // onDelete(id: number): void {
  //   if (confirm('Êtes-vous sûr de vouloir supprimer ce fournisseur?')) {
  //     this.provider.deleteProvider(id.toString()).subscribe(() => {
  //       // this.items = (this.items ?? []).filter((item: ProviderModel) => item.id !== id);
  //       this.items = (this.items ?? []).filter((item: ProviderModel) => item.id !== parseInt(id!, 10));

  //     });
  //   }
  // }
  

  // confirmDelete(id: number): void {
  //   if (confirm('Êtes-vous sûr de vouloir supprimer ce fournisseur?')) {
  //   this.onDelete(id);
  //   }
  //   }




  // onView(provider: ProviderModel): void {
  //   const dialogRef = this.dialog.open(ViewComponent, {
  //     width: '400px',
  //     data: provider
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  // onEdit(provider: ProviderModel): void {
  //   const dialogRef = this.dialog.open(EditComponent, {
  //     width: '400px',
  //     data: provider
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

}
