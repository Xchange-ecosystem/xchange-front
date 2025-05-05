import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconArrowRightComponent, XcIconCloseSComponent, XcIconSaveComponent } from '@indziaki/ngx-xchange-icons';
import { ProfileTagsDirective, RoundedImageModule, ToggleComponent } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-ecosystem-admin',
  standalone: true,
  imports: [
    ProfileTagsDirective,
    RoundedImageModule,
    NgIf,
    NgClass,
    NgFor,
    ToggleComponent,
    XcIconArrowRightComponent,
    XcIconSaveComponent,
    XcIconCloseSComponent
  ],
  templateUrl: './ecosystem-admin.component.html',
  styleUrl: './ecosystem-admin.component.scss'
})
export class EcosystemAdminComponent {
  isNotification = false;
  isTags = false;
  isHistory =false;
  isBuyCredits = false;
  isSendCredits = false;
  isEditMemeber = false;
  isSendMessage = false; 
  isSetNewPassword= false;
  isSuspendMember = false;
  tempImage = "https://lh3.googleusercontent.com/a-/ALV-UjWBPEgImeAd-djw96NL4WF8xLI_JH3DbdkDsm-mmc7JjuXTCTXOZA8RbLgqtKSBbj9wgNTzghEZGdrJd0qKXkl7Qk8eROaPBrzCa_-HevwHm24u8r0VbtRCI8U7Mitcn404HcQ3Q_Z5OOanSyxk5RVJmvBkOrBASppT7mfsyfaLpa__0REuARYQW_kuqBQ2XusZcvaAEzvZ9hZ76ISVWZpubpwahABqOKV7tOX0iWGklH6hErJU--8aZyTSxm5AAiJed2gonzdz4t515lrNWGVpdGCScjvAzUXZ3U6Wh3boiyICBGxfMT-gtTBxWlfWNRJV3dsc5kYiIOilnU61ub10pZKqfO4x5GFIsxlQqz9EAZg6buZtgYtKgGqO_mK59cgogeDJb_njHxVpMoL3Zp5u1tG6qSWPNv539xY88ffW3J34jV6BXkMEO3MFKD3UiRV6AAbWe58gbAjjoK87nhus59oiDdDA2pKxwRN5OKN78ecdK4kepBJuSuNoLwgpPn624UeTei3v8b03Be9FNO6BaFkhB5hguYQDkMAN5mGwLTXbcZzrIb9EM0ImpluHV-_1cNvZ2w2KYR6y7GT-zuqa9fUiww3DO4jVyIH0GT0IB8V8X-Iog968OImfHSlrQSu0Co6j3XTGs0_nH9vTP62xPM3ZDtp6LdQf3ZacBjPI07bCDGGiznVQ52KPhHfX5uefcvdSy8hZKLSiOi22r5HrtrzAVr6ads4jLahOyxt8FlS8S2mxdughUqhBom4tP-WSP7E4GE9IZai3tTHrI8zXApsunxtLlqSgs5twmWJPxia2OcMSHbNVtFo7cCdnCXZ4eaSU9iRyfs4IQLuZks1soVhXJa3ZxkebOxjqnLeOqmBNbSH-BGFVSBNdVXzVdLOrrywyaLfMENyRRCY7XJAxefi3f9K-bOmwBP3llMgCX7QkjRH_BfEzaFUCNG8khfusV9ZP8qWqLRXbhNroGeAfVoYAE4_B=s64-w64-h64-c-k-no";

  sections = ['Apperance', 'Legal', 'Credits', 'Templates', 'Members'];
  tags = [
    "Technology",
    "Health",
    "Education",
    "Finance",
    "Sports",
    "Music",
    "Travel",
    "Web Development",
    "Artificial Intelligence",
    "Science",
    "Fashion",
    "Cooking",
    "Marketing",
    "Wellness",
    "Photography",
    "Video Games",
    "History",
    "Movies",
    "Politics",
    "Psychology",
    "Programming",
    "UX/UI",
    "React",
    "Angular",
    "TypeScript",
    "Next.js",
    "MongoDB",
    "Node.js"
  ];
  Transactions = [
    {
      name: "Manuel Cabrera",
      date: "14 Aug.24",
      amount: "-500 Xcoins",
      image: "https://i.pravatar.cc/100?u=manuel",
      destiny:"Jake Gillenhall"
    },
    {
      name: "Lucía Torres",
      date: "10 Aug.24",
      amount: "-250 Xcoins",
      image: "https://i.pravatar.cc/100?u=lucia",
      destiny:"Ecosystem"
    },
    {
      name: "Carlos Rivera",
      date: "05 Aug.24",
      amount: "+1,200 Xcoins",
      image: "https://i.pravatar.cc/100?u=carlos",
      destiny:"Ecosystem"
    },
    {
      name: "Ana Gómez",
      date: "28 Jul.24",
      amount: "-150 Xcoins",
      image: "https://i.pravatar.cc/100?u=ana",
      destiny:"One Life"
    },
    {
      name: "Diego Martínez",
      date: "21 Jul.24",
      amount: "+800 Xcoins",
      image: "https://i.pravatar.cc/100?u=diego",
      destiny:"One Life"
    }
  ];

  section: string = 'Credits';

  changeSection(section: string): void {
    this.section = section;
  }
  
  openTagsModal() {
    this.isTags = true;
  }
  closeTagsModal() {
    this.isTags = false;
  }

  openHistoryModal () {
    this.isHistory = true;
  }

  closeHistoryModal () {
    this.isHistory = false;
  }

  openBuyCredits () {
    this.isBuyCredits = true;
  }

  closeBuyCredists () {
    this.isBuyCredits = false;
  }
}
