import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'xc-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  ngOnInit(): void {
    this.notChosen = this.dataset.filter((ds) => !this.chosen.map((c)=>c.key).includes(ds.key)).map((ds) => ds.key)
  }

  @Input() dataset: chipData[] = []
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() chosen: chipData[] = [];
  @Input() limitTags: boolean = false;
  @Output() chosenChange = new EventEmitter<chipData[]>();
  @Output() tagsComplete = new EventEmitter<boolean>(false);

  isVisible: boolean = false;
  notChosen: string[] = []

  showOptions(visible: boolean) {
    this.isVisible = visible
  }

  addKey(item: chipData) {
    let isAdded = this.chosen.some((c) => c.key === item.key)
    if(isAdded) return
    this.chosen = [...this.chosen, item ]
    this.notChosen = this.notChosen.filter((nc) => nc !== item.key )
    this.emitChosen()
  }

  getNotChosen(filter:string) {
    return this.dataset
      .filter((ds) => this.notChosen.includes(ds.key))
      .filter((nc) => nc.value.includes(filter))
  }

  getChosen() {
    return this.chosen
  }

  removeItem(item: chipData) {
    if(item.key === '-1')
      this.chosen = this.chosen.filter( (c) => c.value !== item.value );
    else
      this.chosen = this.chosen.filter((c) => c.key !== item.key);

    this.notChosen = [...this.notChosen, item.key]
    this.tagsComplete.emit(true); 
    this.emitChosen()
  }

  emitChosen() {
    this.tagsComplete.emit(true); 
    this.chosenChange.emit(this.chosen)
  }

  addUnregister( event: any ) {
    let exist = this.chosen.some((c) => c.key === '-1' && c.value === event.target.value )
    if(exist) return
    if(this.chosen.length === 5 && this.limitTags){
      return;
    }
    this.chosen = [...this.chosen, {key: '-1', value: event.target.value}]
    event.target.value = ''
    this.emitChosen()
  }

}

type chipData = {
  key: string;
  value: string;
}
