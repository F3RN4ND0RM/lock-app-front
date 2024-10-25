import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    CardModule,
    BreadcrumbModule
    
  ],
  exports :[
    ButtonModule,
    ImageModule,
    CardModule,
    BreadcrumbModule
  ]
})


export class NgprimeModule { }
