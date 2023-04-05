import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../fournisseurs/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../fournisseurs/post';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  name!: Post;
  device!: FormGroup;

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
      this.name = data;
    });

    this.device = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.device.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.device.value);
    this.postService.update(this.id, this.device.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/liste-fournisseurs');
    })
  }

}
