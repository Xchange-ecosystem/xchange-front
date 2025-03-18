import { Component } from '@angular/core';
import { ProfileTagsDirective } from '../../directives/profile-tags/profile-tags.directive';
import { RoundedImageModule } from '../rounded-image/rounded-image.module';
import { NgFor } from '@angular/common';
import { ProfileHeaderDirective } from '../../directives/profile-header/profile-header.directive';

@Component({
  selector: 'xc-user-profile-modal',
  standalone: true,
  imports: [ProfileTagsDirective,RoundedImageModule,NgFor, ProfileHeaderDirective],
  templateUrl: './user-profile-modal.component.html',
  styleUrl: './user-profile-modal.component.css'
})
export class UserProfileModalComponent {
  public users = [
    {
      name: 'John Doe',
      company:'COD Company',
      completedObj:12,
      activeObj:12,
      nextSteps:0o3,
      invProyects:4,
      collaborations: 2,
      imageUrl: 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b',
      tags: ['Healt', 'Entrepeneur', 'Lorem','Entrepeneur','Entrepeneur',],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      memberDate:"7 Aug 2024",
      email:"tester@gmail.com",
      linkedin:"https://www.linkedin.com/in/john-doe"
    },
  ];
}
