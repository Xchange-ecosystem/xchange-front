import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-goal-modal',
  standalone: true,
  imports: [],
  templateUrl: './new-goal-modal.component.html',
  styleUrl: './new-goal-modal.component.scss'
})
export class NewGoalModalComponent {
  @Output() close = new EventEmitter<void>();

  closeNewGoalModal() {
    this.close.emit();
  }
}
