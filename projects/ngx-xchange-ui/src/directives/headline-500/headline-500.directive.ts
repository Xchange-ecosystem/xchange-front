import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcHeadline500]',
  standalone: true
})
export class Headline500Directive {

   constructor(private el: ElementRef, private renderer: Renderer2) {
     this.setStyle();
   }
 
   private setStyle() {
     this.renderer.setStyle(this.el.nativeElement, 'font-size', '32px');
     this.renderer.setStyle(this.el.nativeElement, 'font-weight', '600');
     this.renderer.setStyle(this.el.nativeElement, 'color', 'var(--xc-black400)');
     this.renderer.setStyle(this.el.nativeElement, 'line-height', '38px');
   }
}
