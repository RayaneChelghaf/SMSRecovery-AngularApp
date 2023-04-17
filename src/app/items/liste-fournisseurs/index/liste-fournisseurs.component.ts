import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../../../services/provider.service";
import {ProviderModel} from "../../../add-fournisseur/add-fournisseur.component";
import {tap} from "rxjs";
import {ViewComponent} from "../view/view.component";
import {EditComponent} from "../edit/edit.component";

@Component({
  selector: 'app-liste-fournisseurs',
  templateUrl: './liste-fournisseurs.component.html',
  styleUrls: ['./liste-fournisseurs.component.css']
})
export class ListeFournisseursComponent implements OnInit{

  public items : ProviderModel[] | null = null;

  constructor( private provider : ProviderService ) { }

  ngOnInit(): void {

    let result = this.provider.list();

    result
      .pipe(
        tap(t => this.items = t)
      )
      .subscribe();

  }

  delete(id: string): void {
    const res = confirm('Vous êtes sur le point de supprimer un fournisseur.\nÊtes-vous sûr de vouloir le supprimer ?');
    // const res = confirm('Vous êtes sur le point de supprimer un fournisseur.\nÊtes-vous sûr de vouloir supprimer' +this.items);
    if (res) {


        this.onDelete(id);
      }
    }

public onDelete(id: string | undefined): void {
  if (!id) {
    return;
  }

  this.provider.delete(id).subscribe(() => {
    this.items = (this.items ?? []).filter((item: ProviderModel) => item.id !== id);
  });
}
}

// A tester / A Supprimer


  // public ngOnInit(): void {
  //   this.isLoading = true;
  //   this.provider.list().subscribe({
  //     next: (data: ProviderModel[]) => {
  //       this.items = data;
  //     },
  //     complete: () => {
  //       this.isLoading = false;
  //     }
  //   });
  // }
  


  




  // onDelete(id: number): void {
  //   if (confirm('Êtes-vous sûr de vouloir supprimer ce fournisseur?')) {
  //     this.provider.deleteProvider(id.toString()).subscribe(() => {
  //       // this.items = (this.items ?? []).filter((item: ProviderModel) => item.id !== id);
  //       this.items = (this.items ?? []).filter((item: ProviderModel) => item.id !== parseInt(id!, 10));

  //     });
  //   }
  // }




                      // onDelete(bookid:string){
                      //   this.provider.delete(item.id)
                      //   .subscribe(item=>{
                      //     this.posts();
                      //   })
                      // }



                                // deletePost(id:number){
                                //   this.provider.delete(id).subscribe(res => {
                                //        this.posts = this.posts.filter(item => item.id !== id);
                                //        console.log('Post deleted successfully!');
                                //   })
                                // }

                              



                                
// Tests unitaires

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

//   onDelete(id: number): void {
//     if (confirm('Êtes-vous sûr de vouloir supprimer ce fournisseur?')) {
//       this.provider.deleteProvider(id.toString()).subscribe(() => {
//         this.items = (this.items ?? []).filter((item: ProviderModel) => {
//           if (typeof id === 'number') {
//           return item.id !== id;
//           }
//           return false;
//         });      });
//     }
//   }