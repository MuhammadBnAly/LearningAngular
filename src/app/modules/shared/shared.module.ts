import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports :[
    MatButtonModule,
    MatListModule,
    MatTableModule,
  ]
})
export class SharedModule { }
