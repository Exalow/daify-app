import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [ 
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
  ],
  exports: [ 
    HomeComponent,
  ]
})
export class HomeModule { }
