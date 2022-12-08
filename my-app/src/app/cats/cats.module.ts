import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsPageComponent } from './pages/cats-page/cats-page.component';
import { ActionComponent } from './components/action/action.component';



@NgModule({
  declarations: [
    CatsPageComponent,
    ActionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatsPageComponent
  ]
})
export class CatsModule { }
