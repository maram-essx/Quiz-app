import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';

import {MatSelectModule} from '@angular/material/select';

import { MatPaginatorModule} from '@angular/material/paginator';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from './components/delete/delete.component';


@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    NavbarComponent,
    DeleteComponent,

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
    MatDialogModule,
    MatMenuModule,

MatSelectModule,

    MatPaginatorModule,



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
    MatDialogModule,
    MatMenuModule,

MatSelectModule,

    MatPaginatorModule,


  ],
})
export class SharedModule { }
