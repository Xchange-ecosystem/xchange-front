import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'xc-list-item-selector',
    templateUrl: './list-item-selector.component.html',
    styleUrl: './list-item-selector.component.css',
    standalone: false
})
export class ListItemSelectorComponent implements OnInit {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() name: string = '';
  @Input() completed: boolean = false;
  @Input() userItem: boolean = false;
  @Input() bigItem: boolean = false;
  @Input() transparent: boolean = false
  
    @Output() checkedChange = new EventEmitter<boolean>();
  
    toggleChequed() {
      this.checked = !this.checked
      this.checkedChange.emit(this.checked)
    }
  
  public id = crypto.randomUUID();
  ngOnInit(): void {
     
  }
}
