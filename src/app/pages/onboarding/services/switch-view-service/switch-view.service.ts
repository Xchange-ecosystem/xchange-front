import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ViewStates =
  | 'default'
  | 'owner'
  | 'collaborator'
  | 'investor'
  | 'operator';

@Injectable({ providedIn: 'root' })
export class SwitchViewService {

  private readonly viewStateSubject = new BehaviorSubject<ViewStates>('default');

  setViewState(viewState: ViewStates): void {
    this.viewStateSubject.next(viewState);
  }

  getViewState(): Observable<ViewStates> {
    return this.viewStateSubject.asObservable();
  }

  getCurrentViewState(): ViewStates {
    return this.viewStateSubject.getValue();
  }
}
