import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Inject, inject, OnDestroy, Output } from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[xcDisableCLick]',
})
export class DisableCLickDirective implements AfterViewInit, OnDestroy{

  documentSubscription: Subscription | undefined;
  @Output()
  xcDisableCLick: EventEmitter<void> = new EventEmitter();

  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) { 
    debugger
  }
  ngOnDestroy(): void {
    this.documentSubscription?.unsubscribe;
  }
  ngAfterViewInit(): void {
    this.documentSubscription = fromEvent(this.document, 'click').pipe(filter((event) => {
      return !this.isInside(event.target as HTMLElement)
    }))
    .subscribe(() => {
      this.xcDisableCLick.emit()
    })
  }

  isInside(elementToCheck: HTMLElement):boolean {
    return (elementToCheck === this.elementRef.nativeElement ||
      this.elementRef.nativeElement.contains(elementToCheck)
    )
  }

}
