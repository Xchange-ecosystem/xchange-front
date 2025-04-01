import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { XcIconCheckComponent } from '@indziaki/ngx-xchange-icons';
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
    ClickOutsideDirective
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() totalSteps: number = 0;
  actualStep: number = 1;
  stepsArray: number[] = [];

  ngOnChanges(): void {
    this.updateStepsArray();
  }

  changeStep(): void {
    if (this.actualStep < this.totalSteps) {
      this.actualStep++;
      console.log('Paso actual:', this.actualStep);
    } else {
      console.log('Has alcanzado el último paso');
    }
  }

  previousStep(): void {
    if (this.actualStep > 1) {
      this.actualStep--;
      console.log('Paso anterior:', this.actualStep);
    } else {
      console.log('Ya estás en el primer paso');
    }
  }

  updateStepsArray(): void {
    this.stepsArray = Array.from({ length: this.totalSteps }, (_, index) => index + 1);
  }

}
