import { Component, Input } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isOpenedValue!: boolean;

  isInstructor: boolean = true;

  constructor(private _NavbarService: NavbarService) {
    this.getRole();
  }

  updatePageTitle(title: string) {
    this._NavbarService.changePageTitle(title);
  }

  getRole() {
    const role = localStorage.getItem('role');
    if(role == 'Student'){
      this.isInstructor = false;
    }
  }
}
