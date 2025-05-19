import { Component } from '@angular/core';
import { StepperService } from '../services/stepper-service/stepper.service';
import { Subscription } from 'rxjs';
import { StepperComponent } from "../stepper/stepper.component";
import { SwitchViewService } from '../services/switch-view-service/switch-view.service';
import { XcIconArrowLeftComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-collaborator-splash',
  standalone: true,
  imports: [
    StepperComponent,
    XcIconArrowLeftComponent
  ],
  templateUrl: './collaborator-splash.component.html',
  styleUrl: './collaborator-splash.component.scss'
})
export class CollaboratorSplashComponent {
steps = 0;
  activeStep = 0;
  stepsArray: number[] = [];
  private sub!: Subscription;

  constructor(
    private stepperSrv: StepperService,
    private switchViewSrv: SwitchViewService
  ) {}

  ngOnInit(): void {
    this.sub = this.stepperSrv.getStepCount$().subscribe((cnt) => {
      this.steps = cnt;
      this.stepsArray = Array.from({ length: cnt });
      this.activeStep = 0;
    });
  }
  goBack(): void {
    console.log('goBack click - activeStep:', this.activeStep);

    if (this.activeStep === 0) {
      console.log('→ Paso 1, volvemos a default');
      this.switchViewSrv.setViewState('default');
    } else if (this.activeStep > 0) {
      console.log('→ Retrocedemos un paso');
      this.activeStep--;
    } else {
      return
    }
  }
  nextStep(): void {
    console.log('nextStep click - activeStep:', this.activeStep);
    if (this.activeStep < this.steps - 1) {
      this.activeStep++;
    } else {
      return
    }
  }
}
