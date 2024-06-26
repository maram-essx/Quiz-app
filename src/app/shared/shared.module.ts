import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,

  ],
  exports:[
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    NavbarComponent,
    MatSnackBarModule,

  ],
})
export class SharedModule { }
