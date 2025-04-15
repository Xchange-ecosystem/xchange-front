import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { XcIconArrowLeftComponent, XcIconCheckComponent, XcIconFileUploadComponent, XcIconSearchComponent } from '@indziaki/ngx-xchange-icons';
import { ProjectsCardComponent } from 'src/app/pages/projects/projects-card/projects-card.component';
import { Headline400Directive } from 'projects/ngx-xchange-ui/src/directives/headline-400/headline-400.directive';
import { ClickOutsideDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    XcIconCheckComponent,
    NgFor,
    NgClass,
    NgIf,
    Headline400Directive,
    ClickOutsideDirective,
    XcIconArrowLeftComponent,
    XcIconFileUploadComponent,
    XcIconSearchComponent,
    ProjectsCardComponent
],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements OnInit {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() totalSteps: number = 0;
  @Output() finishStepper:EventEmitter<void>=new EventEmitter<void> () 
  showMetrics: boolean = true;
  actualStep: number = 1;
  stepsArray: number[] = [];
  
  ngOnInit(): void {
    this.updateStepsArray();
  }

  changeStep(): void {
    if (this.actualStep < this.totalSteps) {
      this.actualStep++;
    }
  }

  finish(): void {
    this.finishStepper.emit();
  }

  previousStep(): void {
    if (this.actualStep > 1) {
      this.actualStep--;
    } else {
    }
  }

  updateStepsArray(): void {
    this.stepsArray = Array.from({ length: this.totalSteps }, (_, index) => index + 1);
  }

}
