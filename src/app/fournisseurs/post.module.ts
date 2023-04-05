import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from '../items/liste-fournisseurs/view/view.component';
import { CreateComponent } from '../items/liste-fournisseurs/create/create.component';
import { EditComponent } from '../items/liste-fournisseurs/edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeFournisseursPostComponent } from './liste-fournisseurs-post/liste-fournisseurs-post.component';

@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent, ListeFournisseursPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
