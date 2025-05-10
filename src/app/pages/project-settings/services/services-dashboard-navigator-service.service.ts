import { EventEmitter, Injectable } from '@angular/core';
export type TabState = 'Appearance' | 'Legal' | 'Credits'| 'Members';

@Injectable({
  providedIn: 'root'
})
export class ProjectDashboardNavigatorService {

  constructor() { }

  private tabState: TabState = 'Appearance'
  public tabState$: EventEmitter<TabState> = new EventEmitter<TabState>();

  setTabState(tabState: TabState) {
    this.tabState = tabState;
    this.tabState$.next(tabState);
  }
  getTabState(): TabState {
    return this.tabState;
  }
}