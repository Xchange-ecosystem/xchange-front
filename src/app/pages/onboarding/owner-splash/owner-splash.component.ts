import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepperService } from '../services/stepper-service/stepper.service';
import { StepperComponent } from '../stepper/stepper.component';
import { XcIconAIComponent, XcIconArrowLeftComponent, XcIconPlusCircleComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';
import { SwitchViewService } from '../services/switch-view-service/switch-view.service';
import { NgIf } from '@angular/common';
import { ProfileTagsDirective, RoundedImageModule } from '@indziaki/ngx-xchange-ui';
import { CummonFormComponent } from "../cummon-form/cummon-form.component";

@Component({
  selector: 'app-owner-splash',
  standalone: true,
  imports: [
    StepperComponent,
    XcIconArrowLeftComponent,
    NgIf,
    RoundedImageModule,
    XcIconAIComponent,
    ProfileTagsDirective,
    XcIconTimesComponent,
    XcIconPlusCircleComponent,
    CummonFormComponent
],
  templateUrl: './owner-splash.component.html',
  styleUrls: ['./owner-splash.component.scss'],
})
export class OwnerSplashComponent implements OnInit {
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
