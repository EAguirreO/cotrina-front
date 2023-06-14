import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AlterMainComponent } from './alter-main/alter-main.component';



@NgModule({
  declarations: [
    MainComponent,
    AlterMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MainComponent,
    AlterMainComponent
  ]
})
export class LayoutsModule { }
