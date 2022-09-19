import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { ProdSidebarComponent } from '../../ecommerce/prod-sidebar/prod-sidebar.component';
import { DetailsComponent } from '../../ecommerce/details/details.component';
import { ListComponent } from '../../ecommerce/list/list.component';
import { ProdHomeComponent } from '../../ecommerce/prod-home/prod-home.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    ProdHomeComponent,
    ProdSidebarComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
