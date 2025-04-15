import { Component, Input } from '@angular/core';
import { HeadlineStylesDirective } from '../../directives/headline-styles/headline-styles.directive';
import { CopyStylesDirective } from '../../directives/copy-styles/copy-styles.directive';

@Component({
  selector: 'xc-info-row',
  standalone: true,
  imports: [HeadlineStylesDirective,CopyStylesDirective],
  templateUrl: './info-row.component.html',
  styleUrl: './info-row.component.css'
})
export class InfoRowComponent {
  @Input() label: string = ''; 
  @Input() value: number = 0;
}
