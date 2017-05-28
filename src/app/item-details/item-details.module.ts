import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../shared/pipes/pipes.module';

import { ItemDetailsComponent } from './item-details/item-details.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  declarations: [
    ItemDetailsComponent,
    CommentComponent
  ],
  exports: [
    ItemDetailsComponent
  ]
})
export class ItemDetailsModule { }
