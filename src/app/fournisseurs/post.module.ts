import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ListeFournisseursComponent } from '../items/liste-fournisseurs/index/liste-fournisseurs.component';
import { ViewComponent } from '../items/liste-fournisseurs/view/view.component';
import { EditComponent } from '../items/liste-fournisseurs/edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewComponent, EditComponent, ListeFournisseursComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
