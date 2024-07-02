import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { NavbarService } from '../../services/navbar.service';
import { AddQuizComponent } from 'src/app/features/instructor/quizzes/components/add-quiz/add-quiz.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() mainTextHeader: string = 'Dashboard';

  userFirstName: any;
  userLastName: any;
  userRole: any;

  constructor(
    private _AuthService: AuthService,
    private _NavbarService: NavbarService,
    public dialog: MatDialog
  ) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userFirstName = localStorage.getItem('first_name');
    this.userLastName = localStorage.getItem('last_name');
    this.userRole = localStorage.getItem('role');
  }

  openChangePassDialog() {}

  logout() {
    this._AuthService.logout();
  }

  openAddDialog(add: boolean): void {
    const dialogRef = this.dialog.open(AddQuizComponent, {
      width: '75%',
      height: '75%',
      data: {
        add: add,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
      }
    });
  }
}
