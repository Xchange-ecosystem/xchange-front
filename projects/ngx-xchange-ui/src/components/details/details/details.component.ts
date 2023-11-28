import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'xc-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements AfterViewInit {
  @ViewChild('detailsElm', { static: false }) detailsElm!: ElementRef ;
  @Input() title: string = '';
  @Input() isOpen: boolean = true;

  ngAfterViewInit() {
    this.detailsElm.nativeElement.open = this.isOpen
    this.detailsElm.nativeElement.addEventListener('toggle', () => {
      this.isOpen = this.detailsElm.nativeElement.open;
    })
  }
}
