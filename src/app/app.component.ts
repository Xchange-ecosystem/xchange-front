import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecosystem-web';
  ds = [
    {key:'1', value: 'cat'},
    {key:'2', value: 'dog'},
    {key:'3', value: 'fish'},
  ]

  elegidos = [
    {key:'1', value: 'cat'},
  ]
}
