import { Component } from '@angular/core';
import { StepperService } from '../services/stepper-service/stepper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collaborator-splash',
  standalone: true,
  imports: [],
  templateUrl: './collaborator-splash.component.html',
  styleUrl: './collaborator-splash.component.scss'
})
export class CollaboratorSplashComponent {
  /** Número de pasos que llega desde StepperService */
  steps = 0;

  /** Suscripción para limpiar en ngOnDestroy */
  private sub!: Subscription;

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {
    // Nos suscribimos al observable reactivo de steps
    this.sub = this.stepperService.getStepCount$().subscribe(count => {
      this.steps = count;
    });

    // Por si el valor ya existe antes de la primera emisión
    this.steps = this.stepperService.getCurrentStepCount();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
