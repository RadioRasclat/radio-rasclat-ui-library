import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    PatternLibComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    PatternLibComponent
  ]
})
export class PatternLibModule { }
