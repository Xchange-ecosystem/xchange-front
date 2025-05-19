import { Component, OnInit } from '@angular/core';
import {
  ViewStates,
} from '../services/switch-view-service/switch-view.service';
import { Observable, Subscription } from 'rxjs';
import { StepperService } from '../services/stepper-service/stepper.service';

@Component({
  selector: 'app-owner-splash',
  standalone: true,
  imports: [],
  templateUrl: './owner-splash.component.html',
  styleUrl: './owner-splash.component.scss',
})
export class OwnerSplashComponent implements OnInit {

  steps = 0;

  private sub!: Subscription;

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {

    this.sub = this.stepperService.getStepCount$().subscribe(count => {
      this.steps = count;
    });


    this.steps = this.stepperService.getCurrentStepCount();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
