import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export type ViewStates = 'default' | 'owner' | 'collaborator' | 'investor' | 'operator'
@Injectable({
  providedIn: 'root'
})
export class SwitchViewService {

  constructor() { }

  private viewState$:EventEmitter<ViewStates> = new EventEmitter<ViewStates>()

  setViewState(viewState:ViewStates) {
    this.viewState$.next(viewState)
  }

  getViewState():Observable<ViewStates> {
    return this.viewState$.asObservable()
  }
}
