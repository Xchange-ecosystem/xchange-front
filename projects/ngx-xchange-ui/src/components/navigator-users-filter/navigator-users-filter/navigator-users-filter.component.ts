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
export class NavigatorUsersFilterComponent implements OnInit {
  
  @Input() users: Users[] = [];
  @Input() isVisible: boolean = false;
  @Input() selectedUsers: number[] = [];
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() selectedUsersChange = new EventEmitter<number[]>();
  public usersSelectedList: number[] = [];
  
  ngOnInit(): void {
    this.users.forEach(user => this.usersSelectedList.push(user.userId))
  }

  setUserStatus(event: boolean, userId: number): void {
      if(event) {
        if(this.usersSelectedList.includes(userId)) return
        this.usersSelectedList = [...this.usersSelectedList, userId]
      } else {
        this.usersSelectedList = this.usersSelectedList.filter(uId => userId !== uId )
      }
    }
  
  sendSelection(): void {
    this.selectedUsersChange.emit(this.usersSelectedList);
    this.isVisibleChange.emit(false)
  }
  
  resetFilter(): void {
    this.usersSelectedList = [];
    this.selectedUsersChange.emit(this.usersSelectedList);
    this.isVisibleChange.emit(false)
  }
  
}

