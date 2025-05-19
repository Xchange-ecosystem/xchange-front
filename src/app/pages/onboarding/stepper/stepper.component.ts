import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  @Input({ required: true }) totalSteps = 0;

  private _active = signal(0);
  @Input() set activeStep(val: number) {
    this._active.set(val);
  }
  get activeStep() {
    return this._active();
  }

  @Output() activeStepChange = new EventEmitter<number>();

  steps = computed(() => Array.from({ length: this.totalSteps }));

}
