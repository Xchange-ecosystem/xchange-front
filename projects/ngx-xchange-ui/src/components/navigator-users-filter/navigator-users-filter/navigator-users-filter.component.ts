import { Component, EventEmitter, Input, Output } from '@angular/core';

type Users  = {
  userId: number,
  name: string;
  lastName: string;
  profilePhotoUrl: string | null;
}

@Component({
  selector: 'xc-navigator-users-filter',
  standalone: false,
  templateUrl: './navigator-users-filter.component.html',
  styleUrl: './navigator-users-filter.component.css'
})
export class NavigatorUsersFilterComponent {
  
  @Input() users: Users[] = [];
  @Input() isVisible: boolean = false;
  @Input() notSelectedUsers: number[] = [];
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() onChange = new EventEmitter<number[]>();

  constructor() {}

  setUserStatus(event: boolean, userId: number): void {
    
      if(!event) {
        if(this.notSelectedUsers.includes(userId)) return
        this.notSelectedUsers = [...this.notSelectedUsers, userId]
      } else {
        this.notSelectedUsers = this.notSelectedUsers.filter(uId => userId !== uId )
      }
    }

  sendSelection(): void {
    this.onChange.emit([...this.notSelectedUsers]);
    this.isVisibleChange.emit(false);
  }
  
  resetFilter(): void {
    this.notSelectedUsers = [];
    this.onChange.emit(this.notSelectedUsers);
    this.isVisibleChange.emit(false)
  }
}