import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsPageComponent } from './pages/cats-page/cats-page.component';
import { ActionComponent } from './components/action/action.component';
import { ProgressComponent } from './components/progress/progress.component';



@NgModule({
  declarations: [
    CatsPageComponent,
    ActionComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatsPageComponent,
  ]
})
export class CatsModule { }
