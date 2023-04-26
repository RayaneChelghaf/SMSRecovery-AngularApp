import {Component, OnInit} from '@angular/core';
import {FournisseursService} from '../../../fournisseurs/fournisseurs.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProviderModel} from '../../../../app/fournisseurs/items';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    public item: ProviderModel | null = null;

    /*------------------------------------------
    --------------------------------------------
    Created constructor
    --------------------------------------------
    --------------------------------------------*/
    constructor(
        public fournisseursService: FournisseursService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    ngOnInit(): void {
        const id = this.route.snapshot.params['fournisseurId'];

        if (id) {
            this.fournisseursService.get(id).subscribe((data: ProviderModel) => {
                this.item = data;
            });
        }
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    submit() {
        if (!this.item?.url || !this.item?.name) {

            // Mettre en place de meilleure validation
            return;
        }


        this.fournisseursService.update(this.item.id ?? '', this.item)
            .subscribe((res: any) => {
                console.log('Post updated successfully!');
                this.router.navigateByUrl('/liste-fournisseurs');
            });


    }

}
