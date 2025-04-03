import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';
import { ProfileHeaderDirective } from '../../directives/profile-header/profile-header.directive';
import { CardStylesDirective } from '../../directives/card-styles/card-styles.directive';

@Component({
  selector: 'xc-user-header',
  standalone: true,
  imports: [
    RoundedImageModule,
    NgFor,
    ProfileHeaderDirective,
    CardStylesDirective,
    NgIf
  ],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css',
})
export class UserHeaderComponent {
  @Input() showImage: boolean = true;
  @Input() firstText: string = '';
  @Input() secondText: string = '';
  @Input() showUserData: boolean = true;
  public users = [
    {
      name: 'John Doe',
      company: 'COD Company',
      completedObj: 12,
      activeObj: 12,
      nextSteps: 0o3,
      invProyects: 4,
      collaborations: 2,
      imageUrl:
        'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b',
      tags: ['Healt', 'Entrepeneur', 'Lorem', 'Entrepeneur', 'Entrepeneur'],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      memberDate: '7 Aug 2024',
      email: 'tester@gmail.com',
      linkedin: 'https://www.linkedin.com/in/john-doe',
    },
  ];
}
