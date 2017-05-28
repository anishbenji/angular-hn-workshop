import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../shared/pipes/pipes.module';

import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  declarations: [
    ItemDetailsComponent
  ],
  exports: [
    ItemDetailsComponent
  ]
})
export class ItemDetailsModule { }
