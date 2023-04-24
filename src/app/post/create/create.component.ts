import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {ProviderService} from "../../services/provider.service";
import { ProviderModel } from '../../fournisseurs/items';
import {tap} from "rxjs";

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
// import { AddFournisseurComponent } from '../../add-fournisseur/add-fournisseur.component';

     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})



// export class AddMessageComponent {
//   public model : DeviceModel = {
//     name : '',
//     device : ''

//   }

//   constructor(private providerService : ProviderService) {

//   }

//   addNewModel() {


//     this.providerService.add(this.model)
//       .pipe(
//         tap(t => this.model.name =  '')
//       )
//       .subscribe();
//   }
// }


export class CreateComponent implements OnInit {
    
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
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
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('message/index');
    })
  }
  
}