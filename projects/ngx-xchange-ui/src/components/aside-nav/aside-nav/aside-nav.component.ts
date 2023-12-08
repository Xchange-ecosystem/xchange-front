import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'xc-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css'],
})
export class AsideNavComponent {

  @Input() isOpen: boolean = true;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Input()
  canClose: boolean = true;
  toogleOpen() {
    this.isOpen = !(this.isOpen)
    this.isOpenChange.emit(this.isOpen)
  }
}
