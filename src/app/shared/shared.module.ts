import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';
import { DeleteComponent } from './components/delete/delete.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { NoDataComponent } from './components/no-data/no-data.component';

@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    NavbarComponent,
    PaginatorComponent,
    DeleteComponent,
    ViewProfileComponent,
    NoDataComponent,
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
    PaginatorModule,
    MatDatepickerModule,
    MenuModule,
    ButtonModule,
SpeedDialModule,
  ],
  exports: [
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
    PaginatorModule,
    PaginatorComponent,
    MatDatepickerModule,
    NoDataComponent,
    MenuModule,
    ButtonModule,
    SpeedDialModule,
  ],
})
export class SharedModule {}
