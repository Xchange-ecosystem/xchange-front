import { Component } from '@angular/core';
import { XcIconEnvelopeAltComponent } from 'projects/ngx-xchange-icons/src/lib/envelope-alt.component';
import { CardMeasuresDirective } from 'projects/ngx-xchange-ui/src/directives/card-measures/card-measures.directive';
import { TagModule } from 'projects/ngx-xchange-ui/src/directives/tag/tag.module';
import { RoundedImageModule } from 'projects/ngx-xchange-ui/src/components/rounded-image/rounded-image.module';
import { MainHeadingModule } from '../../directives/main-heading/main-heading.module';
@Component({
  selector: 'xc-community-cards',
  standalone: true,
  imports: [
    CardMeasuresDirective,
    TagModule,
    XcIconEnvelopeAltComponent,
    RoundedImageModule,
    MainHeadingModule,
  ],
  templateUrl: './community-cards.component.html',
  styleUrl: './community-cards.component.css',
})
export class CommunityCardsComponent {
  public labels = ['label1', 'label2', 'label3'];
  public user = [
    {
      name: 'John Doe',
      imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/36.jpg',
      tags: ['Healt', 'Entrepeneur', 'Lorem'],
      description: 'This is a small description of the user',
      collaborations: 2,
      links: ['linkedin', 'mail'],
    },
    {
      name: 'Jenna Ortega',
      imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/36.jpg',
      tags: ['Actress', 'Entrepeneur', 'Lorem'],
      description:
        'This is a small description of the user just a little bit changed for dev purposses',
      collaborations: 200,
      links: ['mail'],
    },
  ];
}
