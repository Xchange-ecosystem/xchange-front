import { Component } from '@angular/core';
import { XcIconEnvelopeAltComponent } from 'projects/ngx-xchange-icons/src/lib/envelope-alt.component';
import { CardMeasuresDirective } from 'projects/ngx-xchange-ui/src/directives/community-card-measures/card-measures.directive';
import { ProfileTagsDirective } from 'projects/ngx-xchange-ui/src/directives/profile-tags/profile-tags.directive';
import { RoundedImageModule } from 'projects/ngx-xchange-ui/src/components/rounded-image/rounded-image.module';
import { MainHeadingModule } from '../../directives/main-heading/main-heading.module';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
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
      id: 1,
      name: "John Doe",
      imageUrl: "https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b",
      tags: ["Health", "Entrepreneur", "Travel"],
      description: "Amante de los libros, el café y los viajes improvisados. Siempre en busca de nuevas historias que contar y lugares por descubrir.",
      collaborations: 2,
      email: "john.doe@gmail.com",
      linkedin: "https://www.linkedin.com/in/john-doe"
    },
    {
      id: 2,
      name: "Jenna Ortega",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/25.jpg",
      tags: ["Actress", "Entrepreneur", "Wellness"],
      description: "I am an alternative practitioner, hormone and nutrient coach. My vision is to make complete, all-encompassing, holistic and integrative health knowledge accessible to all people. That's why we founded OneLife.",
      collaborations: 200,
      email: "jenna.ortega@gmail.com",
      linkedin: null
    },
    {
      id: 3,
      name: "Manuel Cabrera",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/36.jpg",
      tags: ["Tech", "Gamer", "Developer"],
      description: "Desarrollador de software por día, gamer por noche. Fanático de la tecnología, la pizza y los memes. Siempre conectado y listo para el siguiente desafío.",
      collaborations: 50,
      email: "manuel.cabrera@gmail.com",
      linkedin: "https://www.linkedin.com/in/manuel-cabrera"
    },
    {
      id: 4,
      name: "Ana Sánchez",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/12.jpg",
      tags: ["Photography", "Art", "Cats"],
      description: "Fotógrafa freelance apasionada por capturar momentos únicos. Adora los atardeceres, los gatos y el arte en todas sus formas.",
      collaborations: 30,
      email: "ana.sanchez@gmail.com",
      linkedin: "https://www.linkedin.com/in/ana-sanchez"
    },
    {
      id: 5,
      name: "Carlos Ruiz",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/45.jpg",
      tags: ["Chef", "Foodie", "Travel"],
      description: "Chef en formación, amante de la cocina internacional y los sabores auténticos. Siempre experimentando con nuevas recetas y compartiendo sus creaciones.",
      collaborations: 15,
      email: "carlos.ruiz@gmail.com",
      linkedin: "https://www.linkedin.com/in/carlos-ruiz"
    },
    {
      id: 6,
      name: "Marta Gómez",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/18.jpg",
      tags: ["Psychology", "Wellness", "Meditation"],
      description: "Estudiante de psicología con un interés especial en la mente humana y el bienestar emocional. Le encanta leer, meditar y ayudar a los demás.",
      collaborations: 10,
      email: "marta.gomez@gmail.com",
      linkedin: "https://www.linkedin.com/in/marta-gomez"
    },
    {
      id: 7,
      name: "Diego Pérez",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/22.jpg",
      tags: ["Fitness", "Health", "Coach"],
      description: "Entusiasta del fitness y la vida saludable. Entrenador personal que comparte consejos y motivación para alcanzar tus metas.",
      collaborations: 100,
      email: "diego.perez@gmail.com",
      linkedin: "https://www.linkedin.com/in/diego-perez"
    },
    {
      id: 8,
      name: "Sofía Castro",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/30.jpg",
      tags: ["Design", "Art", "Sustainability"],
      description: "Diseñadora gráfica con un ojo para los detalles. Amante del minimalismo, la moda sostenible y el arte digital. Siempre inspirada y creando.",
      collaborations: 25,
      email: "sofia.castro@gmail.com",
      linkedin: "https://www.linkedin.com/in/sofia-castro"
    }
  ]

  selectedUser: any = null;

  openModal(user: any): void {
    this.selectedUser = user;
  }

  closeModal(): void {
    this.selectedUser = null;
  }
}
