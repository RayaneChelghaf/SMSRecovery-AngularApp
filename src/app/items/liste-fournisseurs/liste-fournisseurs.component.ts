import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../../services/provider.service";
import {ProviderModel} from "../../add-fournisseur/add-fournisseur.component";
import {tap} from "rxjs";

@Component({
  selector: 'app-liste-fournisseurs',
   templateUrl: './liste-fournisseurs.component.html',
styleUrls: ['./liste-fournisseurs.component.css']
})
export class ListeFournisseursComponent implements OnInit{

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



// export class IndexComponent implements OnInit {

//   posts: Post[] = [];

//   /*------------------------------------------
//   --------------------------------------------
//   Created constructor
//   --------------------------------------------
//   --------------------------------------------*/
//   constructor(public postService: PostService) { }

//   /**
//    * Write code on Method
//    *
//    * @return response()
//    */
//   ngOnInit(): void {
//     this.postService.getAll().subscribe((data: Post[])=>{
//       this.posts = data;
//       console.log(this.posts);
//     })
//   }

//   /**
//    * Write code on Method
//    *
//    * @return response()
//    */
//   deletePost(id:number){
//     this.postService.delete(id).subscribe(res => {
//          this.posts = this.posts.filter(item => item.id !== id);
//          console.log('Post deleted successfully!');
//     })
//   }

// }
