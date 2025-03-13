import { Component } from '@angular/core';
import { XcIconEnvelopeAltComponent } from 'projects/ngx-xchange-icons/src/lib/envelope-alt.component';
import { CardMeasuresDirective } from 'projects/ngx-xchange-ui/src/directives/card-measures/card-measures.directive';
import {ProfileTagsDirective} from 'projects/ngx-xchange-ui/src/directives/profile-tags/profile-tags.directive';
import { RoundedImageModule } from 'projects/ngx-xchange-ui/src/components/rounded-image/rounded-image.module';
import { MainHeadingModule } from '../../directives/main-heading/main-heading.module';
import { NgFor, NgIf } from '@angular/common';
import { UserProfileModalComponent } from '../user-profile-modal/user-profile-modal.component';
@Component({
  selector: 'xc-community-cards',
  standalone: true,
  imports: [
    CardMeasuresDirective,
    ProfileTagsDirective,
    XcIconEnvelopeAltComponent,
    RoundedImageModule,
    MainHeadingModule,
    NgFor,
    NgIf,
    UserProfileModalComponent
  ],
  templateUrl: './community-cards.component.html',
  styleUrl: './community-cards.component.css',
})
export class CommunityCardsComponent {
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
    {
      name: 'Jenna Ortega',
      imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/36.jpg',
      tags: ['Actress', 'Entrepeneur', 'Lorem'],
      description:
        'I am a alternative practitioner, hormone and nutrient coach. My vision is to make complete, all-encompassing, holistic and integrative health knowledge accessible to all people. Thats why we founded OneLife',
      collaborations: 200,
      email:"tester@gmail.com",
      linkedin:null
    },
    {
      name: 'Manuel Cabrera',
      imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/36.jpg',
      tags: ['Actress', 'Entrepeneur', 'Lorem'],
      description:
        'This is a small description of the user just a little bit changed for dev purposses',
      collaborations: 200,
      email:"tester@gmail.com",
      linkedin:"https://www.linkedin.com/in/john-doe"
    },
    {
      name: 'Manuel Cabrera',
      imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/36.jpg',
      tags: ['Actress', 'Entrepeneur', 'Lorem'],
      description:
        'This is a small description of the user just a little bit changed for dev purposses',
      collaborations: 200,
      email:"tester@gmail.com",
      linkedin:"https://www.linkedin.com/in/john-doe"
    },
    {
      name: 'Manuel Cabrera',
      imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/36.jpg',
      tags: ['Actress', 'Entrepeneur', 'Lorem'],
      description:
        'This is a small description of the user just a little bit changed for dev purposses',
      collaborations: 200,
      email:"tester@gmail.com",
      linkedin:"https://www.linkedin.com/in/john-doe"
    },
  ];
}
