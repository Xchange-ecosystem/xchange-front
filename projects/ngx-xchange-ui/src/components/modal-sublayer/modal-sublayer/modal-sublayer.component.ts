import { ChangeDetectorRef, Component, EventEmitter, inject, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
type SubLayerType = 'hint' | 'with buttons' | 'success'
type SubLayerInformation = {
  title?: string;
  description: string;
  buttonDescription?: string;
}

@Component({
  selector: 'xc-modal-subLayer',
  standalone: false,
  templateUrl: './modal-sublayer.component.html',
  styleUrl: './modal-sublayer.component.css'
})
export class ModalSubLayerComponent implements OnInit {
  @Input() subLayer:SubLayerType = 'hint';
  @Input() subLayerInformation: SubLayerInformation ={
    title: 'Copy',
    description: 'Do you want to copy this Objective as Identify ecosystem participants - (1)?',
    buttonDescription: 'Copy objective'
  }
  @Input() hintInformation: string = 'Link copied to clipboard'
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Input() userDecision: boolean = false;
  @Output() userDecisionChange = new EventEmitter<boolean>();
  
  
  ngOnInit(): void {
    if(['hint', 'success'].includes(this.subLayer)){
      setTimeout(() => {
        this.isVisibleChange.emit(false)
      }, 3500);
    }
  }

  public containerStyles = {
    'hint' : 'hint',
    'with buttons': 'with_buttons',
    'success': 'success'
  }
  
  getContainerStyle(){
    return this.containerStyles[this.subLayer]
  }
  closeSubLayerUserDecisionCancel(){
    this.userDecisionChange.emit(false)
    this.isVisibleChange.emit(false)
  }
  closeSubLayerUserDecisionAccept(){
    this.userDecisionChange.emit(true)
    this.isVisibleChange.emit(false)
  }
}
