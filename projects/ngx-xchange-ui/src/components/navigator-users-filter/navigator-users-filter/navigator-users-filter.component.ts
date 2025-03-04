import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
export class NavigatorUsersFilterComponent implements OnInit{
  
  @Input() users: Users[] = [];
  @Input() isVisible: boolean = false;
  @Input() selectedUsers: number[] = [];
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() selectedUsersChange = new EventEmitter<number[]>();

  constructor() {}
  ngOnInit(): void {
    this.selectedUsers= this.users.map(u => u.userId)
    this.selectedUsersChange.emit(this.selectedUsers)
  }

  setUserStatus(event: boolean, userId: number): void {
      if(event) {
        if(this.selectedUsers.includes(userId)) return
        this.selectedUsers = [...this.selectedUsers, userId]
      } else {
        this.selectedUsers = this.selectedUsers.filter(uId => userId !== uId )
      }
    }

  sendSelection(): void {
    this.selectedUsersChange.emit(this.selectedUsers);
    this.isVisibleChange.emit(false);
  }
  
  resetFilter(): void {
    this.selectedUsers = [];
    this.selectedUsersChange.emit(this.selectedUsers);
    this.isVisibleChange.emit(false)
  }
}