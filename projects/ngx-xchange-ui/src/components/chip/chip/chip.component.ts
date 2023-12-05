import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'xc-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  ngOnInit(): void {
    this.notChosen = this.dataset.filter((ds) => !this.chosen.includes(ds.key)).map((ds) => ds.key)
  }

  @Input() dataset: chipData[] = []
  @Input() label: string = "";
  @Input() chosen: string[] = []
  @Output() chosenChange = new EventEmitter<string[]>();

  notChosen: string[] = []

  addKey(key: chipData["key"]) {
    let isAdded = this.chosen.some((c) => c === key)
    if(isAdded)
      return

    this.chosen = [...this.chosen, key ]
    this.notChosen = this.notChosen.filter((nc) => nc !== key )
    this.emitChosen()
  }

  getNotChosen() {
    return this.dataset.filter((ds) => this.notChosen.includes(ds.key))
  }

  getChosen() {
    return this.dataset.filter((ds) => this.chosen.includes(ds.key))
  }

  removeItem(item: chipData) {
    this.chosen = this.chosen.filter( (c) => c !== item.key );
    this.notChosen = [...this.notChosen, item.key]
    this.emitChosen()
  }

  emitChosen() {
    this.chosenChange.emit(this.chosen)
  }

  addUnregister( event: any ) {
  }
}

type chipData = {
  key: string;
  value: string;
}
