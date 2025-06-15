import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum PortfolioSection {
  GENERAL = 'general',
  METRICS = 'metrics',
  PITCH = 'pitch',
}

@Injectable({
  providedIn: 'root'
})
export class ChangeTabService {
  private currentSection = new BehaviorSubject<PortfolioSection>(PortfolioSection.GENERAL);
  currentSection$ = this.currentSection.asObservable();

  constructor() { }

  changeSection(section: PortfolioSection): void {
    this.currentSection.next(section);
  }

  getCurrentSection(): PortfolioSection {
    return this.currentSection.value;
  }
}
