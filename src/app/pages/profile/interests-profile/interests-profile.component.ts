import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InterestSelectComponent } from './interest-select/interest-select.component';
import { InterestScaleComponent } from './interest-scale/interest-scale.component';

export interface InterestOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-interests-profile',
  standalone: true,
  imports: [
    InterestSelectComponent,
    InterestScaleComponent
  ],
  templateUrl: './interests-profile.component.html',
  styleUrl: './interests-profile.component.scss'
})
export class InterestsProfileComponent {
  @Input() options: InterestOption[] = [];
  @Input() selectedInterest: string | null = null;
  @Input() selectedLevel = 0;

  @Output() selection = new EventEmitter<{ interest: string; level: number }>();

  onInterestChange(val: string) {
    this.selectedInterest = val;
    this.emitIfValid();
  }

  onLevelChange(level: number) {
    this.selectedLevel = level;
    this.emitIfValid();
  }

  private emitIfValid() {
    if (this.selectedInterest) {
      this.selection.emit({
        interest: this.selectedInterest,
        level: this.selectedLevel
      });
    }
  }
}
