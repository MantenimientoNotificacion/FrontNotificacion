import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './components/headers/header-home/header-home.component';
import { GeneralHeaderComponent } from './components/headers/general-header/general-header.component';
import { SessionHeaderComponent } from './components/headers/session-header/session-header.component';



@NgModule({
  declarations: [
    HeaderHomeComponent,
    GeneralHeaderComponent,
    SessionHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderHomeComponent,
    GeneralHeaderComponent,
    SessionHeaderComponent
  ]
})
export class SharedModule { }
