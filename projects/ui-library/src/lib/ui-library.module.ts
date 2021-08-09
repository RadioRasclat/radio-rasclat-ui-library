import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLibraryComponent } from './ui-library.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [UiLibraryComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [UiLibraryComponent, ButtonComponent]
})
export class UiLibraryModule { }
