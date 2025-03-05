import { ChangeDetectorRef, Component, EventEmitter, inject, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, timeInterval } from 'rxjs';
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
  @Input() subLayerObserver:Observable<SubLayerType> = new Observable<SubLayerType>();
  @Input() subLayerInformationObserver: Observable<SubLayerInformation> = new Observable<SubLayerInformation>()
  @Input() hintInformationObserver: Observable<string> = new Observable<string>()
  @Input() isVisible: Observable<boolean> = new Observable<boolean>();
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Input() userDecision: Observable <boolean> = new Observable<boolean>();
  @Output() userDecisionChange = new EventEmitter<boolean>();
  public subLayer: SubLayerType = 'hint'
  public subLayerInformation: SubLayerInformation = {
    title: 'Copy',
    description: 'Do you want to copy this Objective as Identify ecosystem participants - (1)?',
    buttonDescription: 'Copy objective'
  }
  public hintInformation: string = 'Link copied to clipboard';
  constructor() {
  }
  
  
  ngOnInit(): void {
    this.subLayerObserver.subscribe(res => this.subLayer = res)
    this.subLayerInformationObserver.subscribe(res => this.subLayerInformation = res);
    this.hintInformationObserver.subscribe(res => this.hintInformation = res)
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
  getButtonStyle(){
    let style = 'filled'
    const formatString = this.subLayerInformation?.buttonDescription?.toLowerCase()
    if(formatString?.includes('delete')){
      style ='cancel_filled'
    }
    return style
  }
}
