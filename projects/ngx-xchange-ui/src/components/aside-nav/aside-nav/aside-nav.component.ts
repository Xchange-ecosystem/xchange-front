import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'xc-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css'],
})
export class AsideNavComponent implements OnInit, OnChanges {
  @Input() isOpen: boolean = true;
  @Input() theme: string = 'black';
  @Output() isOpenChange = new EventEmitter<boolean>();

  @Input()
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['theme']){
      this.theme = changes['theme'].currentValue
      this.colorSelector()
    }
  }
  
  ngOnInit(): void {
    this.colorSelector()
  }

  public color: string = 'bg-white';
  public colorsPaled: {[key:string]: string}= {
    'black': 'bg-black',
    'white': 'bg-white'
  }
  canClose: boolean = true;
  toggleOpen() {
    this.isOpen = !(this.isOpen)
    this.isOpenChange.emit(this.isOpen)
  }

  getAsideClasses(){
    return `${this.isOpen ? '' : 'hidden'} ${this.color}`
  }

  colorSelector(){
    this.color =  this.colorsPaled[this.theme]
  }
}
