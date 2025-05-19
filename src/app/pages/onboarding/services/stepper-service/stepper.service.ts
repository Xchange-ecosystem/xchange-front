import { inject, Injectable } from '@angular/core';
import {
  SwitchViewService,
  ViewStates,
} from '../switch-view-service/switch-view.service';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  public switchViewService = inject(SwitchViewService);
  state: ViewStates = 'default';

  constructor() {
    this.switchViewService.getViewState().subscribe((state) => {
      this.state = state;
    });
  }

  public stepsDirectory: Record<string, number> = {
    "owner": 8,
    "collaborator": 5,
    "investor": 7,
    "operator": 6,
  };

  setStep() {
    return this.stepsDirectory[this.state] ?? 0;
  }
  getStepCount(state: ViewStates): number {
    return this.stepsDirectory[state] ?? 0;
  }
}
