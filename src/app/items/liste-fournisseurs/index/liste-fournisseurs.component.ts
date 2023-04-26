import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../../../services/provider.service";
import {ProviderModel} from "../../../add-fournisseur/add-fournisseur.component";
import {tap} from "rxjs";

@Component({
    selector: 'app-liste-fournisseurs',
    templateUrl: './liste-fournisseurs.component.html',
    styleUrls: ['./liste-fournisseurs.component.css']
})
export class ListeFournisseursComponent implements OnInit {

    public items: ProviderModel[] | null = null;

    constructor(private provider: ProviderService) {
    }

    ngOnInit(): void {
        let result = this.provider.list();

        result
            .pipe(
                tap(t => this.items = t)
            )
            .subscribe();

    }

    delete(id?: string): void {
        if (!id)
            return;

        const res = confirm('Vous êtes sur le point de supprimer un fournisseur.\nÊtes-vous sûr de vouloir le supprimer ?');
        if (res) {

            this.onDelete(id);
        }
    }

    public onDelete(id: string | undefined): void {
        if (!id) {
            return;
        }

        console.log('Suppression de Fournisseurs avec IP :', id);

        this.provider.delete(id).subscribe(() => {

            console.log('Fournisseurs avec IP', id, 'supprimés avec succès');

            this.items = (this.items ?? []).filter((item: ProviderModel) => item.id !== id);


            console.log('Liste des fournisseurs après supression :', this.items);
        }, (error) => {
            console.error('Une erreur est survenue lors de la suppression du fournisseur via son IP', id, ':', error);
        });
    }

}
