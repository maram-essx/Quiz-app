import { Role } from './../../../core/Enums/Role.enum';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenu } from 'src/app/core/model/global';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  // @Output() isOpenedValue = new EventEmitter<boolean>();
  // isOpened:boolean = true;

  @Input() isOpenedValue!: boolean





}
