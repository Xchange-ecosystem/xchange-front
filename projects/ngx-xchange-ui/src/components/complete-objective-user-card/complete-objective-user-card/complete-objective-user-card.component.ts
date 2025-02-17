import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  isCompleted: boolean;
}

@Component({
  selector: 'xc-complete-objective-user-card',
  standalone: false,
  templateUrl: './complete-objective-user-card.component.html',
  styleUrl: './complete-objective-user-card.component.css',
})
export class CompleteObjectiveUserCardComponent implements OnInit, OnChanges {
  @Input() userData:UserData | undefined = undefined;
  @Output() checked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readMode = false;
  
  ngOnInit(): void {
    this.readMode = this.userData?.isCompleted ? this.userData.isCompleted : false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['userData']){
      this.userData = changes['userData'].currentValue
    }
  }
  emitChecked(){
    this.checked.next(!this.userData?.isCompleted)
    if(this.userData)
      this.userData.isCompleted = !this.userData.isCompleted;
  }
}
