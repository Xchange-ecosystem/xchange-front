import { Component } from '@angular/core';
import { StepperService } from '../services/stepper-service/stepper.service';
import { Subscription } from 'rxjs';
import { StepperComponent } from "../stepper/stepper.component";

@Component({
  selector: 'app-collaborator-splash',
  standalone: true,
  imports: [StepperComponent],
  templateUrl: './collaborator-splash.component.html',
  styleUrl: './collaborator-splash.component.scss'
})
export class CollaboratorSplashComponent {
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
