import { Component, EventEmitter, Input, Output } from '@angular/core';
type UserAssessments = {
  id: string;
  createdAt: string;
  userAccountId: number;
  role: string;
  ratings: Rating[],
  partitionId: number,
  name: string,
  lastName: string,
  email: string,
  password: string,
  profilePhotoUrl: string,
  coverPhotoUrl: string,
  type: string,
  description: string,
  labels: string,
  linkedin: string,
  collaborationsCount: number,
  onboardingStatus: number,
  isPublic: true,
  userFlowCreated: true,
  hours: number
};

type Rating = {
  id: string;
  createdAt: string;
  updateAt: string;
  valuation: string;
  satisfaction: number;
};
type UserAssessmentSelection = {
  data : UserAssessments | undefined,
  checked: boolean
}
@Component({
  selector: 'xc-user-assessment-card',
  standalone: false,
  templateUrl: './user-assessment-card.component.html',
  styleUrl: './user-assessment-card.component.css',
})
export class UserAssessmentCardComponent {
  @Input() userData: UserAssessmentSelection | undefined;
  @Output() userSelected = new EventEmitter<UserAssessmentSelection>();
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() name: string = '';
  @Output() checkedChange = new EventEmitter<boolean>()

  public id = crypto.randomUUID();

  getAssessmentAverage(){
    return this.userData?.data?.ratings.reduce((acc: number, act: Rating ) => {
      return acc += act.satisfaction
    },0)
  }

  toggleChecked() {
    this.checked = !this.checked;
    this.checkedChange.next(this.checked)
    this.userSelected.next({
      data: this.userData?.data,
      checked:this.checked
    })
  }
}
