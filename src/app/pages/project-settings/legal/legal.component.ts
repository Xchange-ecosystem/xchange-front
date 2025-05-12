import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconFileUploadComponent, XcIconPaperclipComponent, XcIconSaveComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [
    NgFor,
    XcIconFileUploadComponent,
    XcIconPaperclipComponent,
    XcIconTimesComponent,
    XcIconSaveComponent
  ],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss',
})
export class LegalComponent {
  countries = ['Mexico', 'United States', 'Canada', 'Argentina', 'Colombia'];
}
