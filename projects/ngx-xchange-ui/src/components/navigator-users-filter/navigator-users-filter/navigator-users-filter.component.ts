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
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() selectedUsers: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public userCheckList: UserSelectorOptions[] = [];
  public usersSelectedList: number[] = [];

  ngOnInit(): void {
    this.userCheckList = this.users.map(user => ({
      ...user, 
      status: false
    }));
  }
  
  setUserStatus(event: boolean, index: number): void {
    const userId = this.userCheckList[index]?.userId;
  
    if (this.usersSelectedList.includes(userId) && !event) {
      this.userCheckList = this.userCheckList.map(user => 
        user.userId === userId ? { ...user, status: false } : user
      );      
      this.usersSelectedList = this.usersSelectedList.filter(user => user !== userId);
      return;
    }
    
    if (!this.usersSelectedList.includes(userId) && userId) {
      this.usersSelectedList.push(userId);
      this.userCheckList[index].status = event;
    }
  }
  
  sendSelection(): void {
    this.selectedUsers.next(this.usersSelectedList);
    this.isVisibleChange.emit(false)
  }
  
  resetFilter(): void {
    this.userCheckList = this.userCheckList.map(user => ({ ...user, status: false }));
    this.usersSelectedList = [];
    this.selectedUsers.next(this.usersSelectedList);
    this.isVisibleChange.emit(false)
  }
  
}

