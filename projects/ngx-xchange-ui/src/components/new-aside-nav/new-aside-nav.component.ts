import { Component } from '@angular/core';
import { AsideLinksComponent } from 'projects/ngx-xchange-ui/src/components/aside-links/aside-links.component';
import { RoundedImageModule } from '../rounded-image/rounded-image.module';
import { NgFor } from '@angular/common';
import { XcIconQuestionCircleComponent } from '@indziaki/ngx-xchange-icons';
@Component({
  selector: 'xc-new-aside-nav',
  standalone: true,
  imports: [AsideLinksComponent, RoundedImageModule,NgFor, XcIconQuestionCircleComponent],
  templateUrl: './new-aside-nav.component.html',
  styleUrl: './new-aside-nav.component.css'
})
export class NewAsideNavComponent {
  public users = [
    {
      name: 'John Doe',
      imageUrl: 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b',
      tags: ['Healt', 'Entrepeneur', 'Lorem'],
      description: 'This is a small description of the user',
      collaborations: 2,
      email:"tester@gmail.com",
      linkedin:"https://www.linkedin.com/in/john-doe"
    },
  ];
}
