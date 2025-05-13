import { Component, EventEmitter, input, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class CompleteObjectiveUserCardComponent implements OnInit {
  @Input() userData:UserData | undefined = undefined;
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() readMode: boolean = false;
  
  ngOnInit(): void {
  }
  emitChecked(){
    if(this.readMode) return
    if(this.userData )
      this.userData.isCompleted = !this.userData.isCompleted;
    this.checked.next(Boolean(this.userData?.isCompleted))
  }
}
  