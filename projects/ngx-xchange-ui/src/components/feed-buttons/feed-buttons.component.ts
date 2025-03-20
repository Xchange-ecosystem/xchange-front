import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'xc-feed-buttons',
  standalone: true,
  imports: [NgFor],
  templateUrl: './feed-buttons.component.html',
  styleUrl: './feed-buttons.component.css'
})
export class FeedButtonsComponent {
  options=["objectives","Assignments","Announcements","Next steps"];
}
