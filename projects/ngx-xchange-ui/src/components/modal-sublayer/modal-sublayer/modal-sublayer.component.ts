import { Component, Input } from '@angular/core';
type SubLayerType = 'hint' | 'with buttons' | 'success'

@Component({
  selector: 'xc-modal-subLayer',
  standalone: false,
  templateUrl: './modal-sublayer.component.html',
  styleUrl: './modal-sublayer.component.css'
})
export class ModalSubLayerComponent {
  @Input() subLayer:SubLayerType = 'hint' 
  public containerStyles = {
    'hint' : 'hint',
    'with buttons': 'with_buttons',
    'success': 'success'
  }

  getContainerStyle(){
    return this.containerStyles[this.subLayer]
  }
}
