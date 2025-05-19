import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepperService } from '../services/stepper-service/stepper.service';
import { StepperComponent } from '../stepper/stepper.component';
import { XcIconArrowLeftComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-owner-splash',
  standalone: true,
  imports: [
    StepperComponent,
    XcIconArrowLeftComponent
  ],
  templateUrl: './owner-splash.component.html',
  styleUrls: ['./owner-splash.component.scss'],
})
export class OwnerSplashComponent implements OnInit {
  steps = 0;
  activeStep = 0;
  stepsArray: number[] = [];
  private sub!: Subscription;


  constructor(private stepperSrv: StepperService) {}

  ngOnInit(): void {
    this.sub = this.stepperSrv.getStepCount$().subscribe(cnt => {
      this.steps = cnt;
      this.stepsArray = Array.from({ length: cnt });
      this.activeStep = 0;
    });
  }
}
