import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../shared/pipes/pipes.module';

import { FeedComponent } from './feed/feed.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    FeedComponent,
    ItemComponent
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedsModule { }
