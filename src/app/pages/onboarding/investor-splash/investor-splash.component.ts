import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepperService } from '../services/stepper-service/stepper.service';

@Component({
  selector: 'app-investor-splash',
  standalone: true,
  imports: [],
  templateUrl: './investor-splash.component.html',
  styleUrl: './investor-splash.component.scss'
})
export class InvestorSplashComponent {
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
