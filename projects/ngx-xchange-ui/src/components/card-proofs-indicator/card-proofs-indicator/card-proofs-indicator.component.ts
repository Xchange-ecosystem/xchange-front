import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-card-proofs-indicator',
  templateUrl: './card-proofs-indicator.component.html',
  styleUrls: ['./card-proofs-indicator.component.css']
})
export class CardProofsIndicatorComponent {
@Input()
proofsCount: Number;


constructor() {
  this.proofsCount = 0
}
}
