import { Component, Input } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isOpenedValue!: boolean;

  constructor(private _NavbarService: NavbarService) {}

  updatePageTitle(title: string) {
    this._NavbarService.changePageTitle(title);
  }
}
