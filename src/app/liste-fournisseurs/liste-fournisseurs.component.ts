import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-fournisseurs',
   templateUrl: './liste-fournisseurs.component.html',
styleUrls: ['./liste-fournisseurs.component.css']
})
export class ListeFournisseursComponent {

}






// import { Component, OnInit } from '@angular/core';
// import { PostService } from '../post.service';
// import { Post } from '../post';
      
// @Component({
//   selector: 'app-liste-fournisseurs',
//   templateUrl: './liste-fournisseurs.component.html',
//   styleUrls: ['./liste-fournisseurs.component.css']
// })
// export class ListeFournisseursComponent implements OnInit {
      
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