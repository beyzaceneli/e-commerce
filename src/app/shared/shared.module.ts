import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { SortingButtonComponent } from './sorting-button/sorting-button.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    ButtonComponent,
    SortingButtonComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    NgbDropdownModule,
    NgbModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    ButtonComponent,
    SortingButtonComponent
  ]
})
export class SharedModule { }
