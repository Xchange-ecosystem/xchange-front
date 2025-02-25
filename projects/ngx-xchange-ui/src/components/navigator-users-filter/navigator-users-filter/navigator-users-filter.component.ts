import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Users  = {
  userId: number,
  name: string;
  lastName: string;
  profilePhotoUrl: string | null;
}

type UserSelectorOptions = Users & {
  status: boolean
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
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() selectedUsers: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public usersSelectedList: number[] = [];

  setUserStatus(event: boolean, userId: number): void {
      if(event) {
        this.usersSelectedList = [...this.usersSelectedList, userId]
      } else {
        this.usersSelectedList = this.usersSelectedList.filter(uId => userId !== uId )
      }
    }
  
  sendSelection(): void {
    this.selectedUsers.next(this.usersSelectedList);
    this.isVisibleChange.emit(false)
  }
  
  resetFilter(): void {
    this.usersSelectedList = [];
    this.selectedUsers.next(this.usersSelectedList);
    this.isVisibleChange.emit(false)
  }
  
}

