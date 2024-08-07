import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // @ViewChild(SidebarComponent) sideBar: SidebarComponent | undefined

  isOpened: boolean = true
  
  toggleSidebar():void{
    this.isOpened = !this.isOpened
  }


}
