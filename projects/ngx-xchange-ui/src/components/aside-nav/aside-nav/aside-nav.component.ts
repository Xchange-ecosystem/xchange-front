import { Component, Input } from '@angular/core';
@Component({
  selector: 'xc-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css'],
})
export class AsideNavComponent {
  isOpen: boolean = true;
  @Input()
  canClose: boolean = true;
  toogleOpen() {
    this.isOpen = !(this.isOpen)
  }
}
