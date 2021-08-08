import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLibraryComponent } from './ui-library.component';
import { ButtonComponent } from './button/button.component';
import { ButtonsetComponent } from './buttonset/buttonset.component';


@NgModule({
  declarations: [UiLibraryComponent, ButtonComponent, ButtonsetComponent],
  imports: [
    CommonModule
  ],
  exports: [UiLibraryComponent, ButtonComponent, ButtonsetComponent]
})
export class UiLibraryModule { }
