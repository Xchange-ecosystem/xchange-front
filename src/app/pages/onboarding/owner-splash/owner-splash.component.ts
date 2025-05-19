import { Component, OnInit } from '@angular/core';
import {
  ViewStates,
} from '../services/switch-view-service/switch-view.service';
import { Observable } from 'rxjs';
import { StepperService } from '../services/stepper-service/stepper.service';

@Component({
  selector: 'app-owner-splash',
  standalone: true,
  imports: [],
  templateUrl: './owner-splash.component.html',
  styleUrl: './owner-splash.component.scss',
})
export class OwnerSplashComponent implements OnInit {
  stepCount$!: Observable<number>;
  steps = 0;

  constructor(private stepperService: StepperService) {}

  ngOnInit() {
    this.stepperService.switchViewService.getViewState().subscribe(() => {
      this.steps = this.stepperService.setStep();
    });
  }
}
