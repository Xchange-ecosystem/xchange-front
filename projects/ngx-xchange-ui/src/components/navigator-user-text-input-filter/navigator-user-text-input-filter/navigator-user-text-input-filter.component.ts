import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'xc-navigator-user-text-input-filter',
  standalone: false,
  templateUrl: './navigator-user-text-input-filter.component.html',
  styleUrl: './navigator-user-text-input-filter.component.css'
})
export class NavigatorUserTextInputFilterComponent {
  private formBuilder = inject(FormBuilder);
  @Input() visible: boolean = false;
  @Output() VisibleChange = new EventEmitter<boolean>();
  @Output() textSearching: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public formInput: FormGroup;



  constructor(){
    this.formInput = this.formBuilder.group({
      textInput: ['']
    })
  }
  sendOptionsSelected(){
    const searchingTextReference = this.formInput.value.textInput;
    this.textSearching.next(searchingTextReference);
    this.VisibleChange.emit(!this.visible);
  }
  
  resetSelectOptions(){
    this.formInput.reset()
    this.VisibleChange.emit(!this.visible)
  }
}
