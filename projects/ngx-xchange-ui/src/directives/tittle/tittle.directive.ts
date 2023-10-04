import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[xcTittle]',
})
export class TittleDirective implements OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit() {
//    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.class = 'bg-slate-500';
  }

}
