import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepperService } from '../services/stepper-service/stepper.service';
import { StepperComponent } from "../stepper/stepper.component";

@Component({
  selector: 'app-operator-splash',
  standalone: true,
  imports: [StepperComponent],
  templateUrl: './operator-splash.component.html',
  styleUrl: './operator-splash.component.scss'
})
export class OperatorSplashComponent {

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
