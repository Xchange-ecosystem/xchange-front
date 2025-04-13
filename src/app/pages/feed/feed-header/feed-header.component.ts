import { Component } from '@angular/core';
import { HeaderBackgroundComponent } from 'projects/ngx-xchange-ui/src/components/header-background/header-background.component';

@Component({
  selector: 'app-feed-header',
  standalone: true,
  imports: [HeaderBackgroundComponent],
  templateUrl: './feed-header.component.html',
  styleUrl: './feed-header.component.scss'
})
export class FeedHeaderComponent {

}
