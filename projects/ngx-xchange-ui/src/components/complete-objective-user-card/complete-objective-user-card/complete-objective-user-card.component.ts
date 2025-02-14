import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface UserData {
  userId: number;
  profilePhotoUrl: string;
  name: string;
  lastName: string;
  role: string;
  hours: number;
  resultCount: number;
  proofCount: number;
  ratingCount: number;
  ratingAverage: number;
  completed: boolean;
}

@Component({
  selector: 'xc-complete-objective-user-card',
  standalone: false,
  templateUrl: './complete-objective-user-card.component.html',
  styleUrl: './complete-objective-user-card.component.css',
})
export class CompleteObjectiveUserCardComponent implements OnInit {
  @Input() userData:UserData | undefined = undefined;
  @Output() checked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readMode = false;

  ngOnInit(): void {
    this.readMode = this.userData?.completed ? this.userData.completed : false;
  }
  emitChecked(){
    this.checked.next(!this.userData?.completed)
    if(this.userData)
      this.userData.completed = !this.userData.completed;
  }
}
