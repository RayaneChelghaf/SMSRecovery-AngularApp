import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../post/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../post/post';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: number;
  post!: Post;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['fournisseurId'];
        
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }
    
}