import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SwitchViewService, ViewStates } from '../switch-view-service/switch-view.service';

@Injectable({ providedIn: 'root' })
export class StepperService {
  private readonly stepsDirectory: Record<ViewStates, number> = {
    default: 0,
    owner: 5,
    collaborator: 4,
    investor: 7,
    operator: 6,
  };

  constructor(private switchViewService: SwitchViewService) {}

  getStepCount$(): Observable<number> {
    return this.switchViewService.getViewState().pipe(
      map((state: ViewStates) => this.stepsDirectory[state] ?? 0) 
    );
  }

  getCurrentStepCount(): number {
    const state = this.switchViewService.getCurrentViewState();
    return this.stepsDirectory[state] ?? 0;
  }
}
