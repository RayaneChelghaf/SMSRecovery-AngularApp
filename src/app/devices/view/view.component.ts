import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderModel } from '../../../app/fournisseurs/items';
import {FournisseursService} from "../../fournisseurs/fournisseurs.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public id: number | null = null;
  public item: ProviderModel | null = null;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public fournisseursService : FournisseursService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['deviceId'];

    if(this.id) {
      this.fournisseursService.get(this.id).subscribe((data: ProviderModel)=>{
        this.item = data;
      });
    }

  }

}
