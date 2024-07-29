import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
