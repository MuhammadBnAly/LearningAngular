import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { DetailsResolver } from '../../core/guards/details.resolver';
import { LoadingGuard } from '../../core/guards/loading.guard';
import { DetailsComponent } from '../../ecommerce/details/details.component';
import { ListComponent } from '../../ecommerce/list/list.component';
import { ProdHomeComponent } from '../../ecommerce/prod-home/prod-home.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path : '' , redirectTo:'prodhome', pathMatch:'full'},
    {path : 'prodhome' , component : ProdHomeComponent},
    {path : 'list' , component : ListComponent,
    /*
    canActivateChild : [ChildrenGuard],
    children: [
      { path:':id', component : DetailsComponent,}
    ] */
    },
    //
    {path : 'list/:id' , component : DetailsComponent,
        canActivate : [AuthGuard],
        canDeactivate : [LoadingGuard],
        resolve : {myList : DetailsResolver},
      },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
