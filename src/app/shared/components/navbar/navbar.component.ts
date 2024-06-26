import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() mainTextHeader: string = 'Dashboard';

  constructor(public dialog: MatDialog) {}

  openChangePassDialog() {}

  logout() {}
}
