import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconArrowRightComponent, XcIconBanComponent, XcIconCloseSComponent, XcIconEditComponent, XcIconEnvelopeComponent, XcIconPadlockComponent, XcIconSaveComponent, XcIconSearchComponent, XcIconSendComponent, XcIconShoppingCartComponent, XcIconTimesComponent, XcIconUserComponent, XcIconUserPlusComponent } from '@indziaki/ngx-xchange-icons';
import { ProfileTagsDirective, RoundedImageModule, ToggleComponent } from '@indziaki/ngx-xchange-ui';
import { ApperanceComponent } from './apperance/apperance.component';
import { LegalComponent } from './legal/legal.component';

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
    XcIconCloseSComponent,
    XcIconUserComponent,
    XcIconTimesComponent,
    XcIconShoppingCartComponent,
    XcIconSearchComponent,
    XcIconEditComponent,
    XcIconEnvelopeComponent,
    XcIconPadlockComponent,
    XcIconBanComponent,
    ApperanceComponent,
    XcIconSendComponent,
    LegalComponent
  ],
  templateUrl: './ecosystem-admin.component.html',
  styleUrl: './ecosystem-admin.component.scss'
})
export class EcosystemAdminComponent {
  isNotification = false;

  isBuyTenant = false;
  isEditMemeber = false;
  isSendMessage = false; 
  isSetNewPassword= false;
  isSuspendMember = false;

  isSelectionValid: boolean = false;
  tempImage = "https://lh3.googleusercontent.com/a-/ALV-UjWBPEgImeAd-djw96NL4WF8xLI_JH3DbdkDsm-mmc7JjuXTCTXOZA8RbLgqtKSBbj9wgNTzghEZGdrJd0qKXkl7Qk8eROaPBrzCa_-HevwHm24u8r0VbtRCI8U7Mitcn404HcQ3Q_Z5OOanSyxk5RVJmvBkOrBASppT7mfsyfaLpa__0REuARYQW_kuqBQ2XusZcvaAEzvZ9hZ76ISVWZpubpwahABqOKV7tOX0iWGklH6hErJU--8aZyTSxm5AAiJed2gonzdz4t515lrNWGVpdGCScjvAzUXZ3U6Wh3boiyICBGxfMT-gtTBxWlfWNRJV3dsc5kYiIOilnU61ub10pZKqfO4x5GFIsxlQqz9EAZg6buZtgYtKgGqO_mK59cgogeDJb_njHxVpMoL3Zp5u1tG6qSWPNv539xY88ffW3J34jV6BXkMEO3MFKD3UiRV6AAbWe58gbAjjoK87nhus59oiDdDA2pKxwRN5OKN78ecdK4kepBJuSuNoLwgpPn624UeTei3v8b03Be9FNO6BaFkhB5hguYQDkMAN5mGwLTXbcZzrIb9EM0ImpluHV-_1cNvZ2w2KYR6y7GT-zuqa9fUiww3DO4jVyIH0GT0IB8V8X-Iog968OImfHSlrQSu0Co6j3XTGs0_nH9vTP62xPM3ZDtp6LdQf3ZacBjPI07bCDGGiznVQ52KPhHfX5uefcvdSy8hZKLSiOi22r5HrtrzAVr6ads4jLahOyxt8FlS8S2mxdughUqhBom4tP-WSP7E4GE9IZai3tTHrI8zXApsunxtLlqSgs5twmWJPxia2OcMSHbNVtFo7cCdnCXZ4eaSU9iRyfs4IQLuZks1soVhXJa3ZxkebOxjqnLeOqmBNbSH-BGFVSBNdVXzVdLOrrywyaLfMENyRRCY7XJAxefi3f9K-bOmwBP3llMgCX7QkjRH_BfEzaFUCNG8khfusV9ZP8qWqLRXbhNroGeAfVoYAE4_B=s64-w64-h64-c-k-no";

  sections = [
    'Apperance', 
    'Legal', 
    'Credits', 
    'Templates', 
    'Members'
  ];

  templateCategories = [
    {
      title: 'Innovation Project',
      selectAll: false,
      options: [
        { label: 'Startups', selected: true },
        { label: 'Innovation Projects', selected: false },
        { label: 'Corporate Innovation', selected: false },
        { label: 'Research', selected: false },
        { label: 'Academy & Curriculum', selected: false },
        { label: 'Social Innovation', selected: false },
        { label: 'Environmental Innovation', selected: false },
        { label: 'Open Innovation', selected: false }
      ]
    },
    {
      title: 'Change and Development',
      selectAll: false,
      options: [
        { label: 'Startups', selected: true },
        { label: 'Innovation Projects', selected: false },
        { label: 'Corporate Innovation', selected: false },
        { label: 'Research', selected: false },
        { label: 'Academy & Curriculum', selected: false },
        { label: 'Social Innovation', selected: false },
        { label: 'Environmental Innovation', selected: false },
        { label: 'Open Innovation', selected: false }
      ]
    },
    {
      title: 'Assessments/ Audits',
      selectAll: false,
      options: [
        { label: 'Startups', selected: true },
        { label: 'Innovation Projects', selected: false },
        { label: 'Corporate Innovation', selected: false },
        { label: 'Research', selected: false },
        { label: 'Academy & Curriculum', selected: false },
        { label: 'Social Innovation', selected: false },
        { label: 'Environmental Innovation', selected: false },
        { label: 'Open Innovation', selected: false },
        { label: 'Startups', selected: true },
        { label: 'Innovation Projects', selected: false },
        { label: 'Corporate Innovation', selected: false },
        { label: 'Research', selected: false },
        { label: 'Academy & Curriculum', selected: false },
        { label: 'Social Innovation', selected: false },
        { label: 'Environmental Innovation', selected: false },
        { label: 'Startups', selected: true },
        { label: 'Innovation Projects', selected: false },
        { label: 'Corporate Innovation', selected: false },
        { label: 'Research', selected: false },
        { label: 'Academy & Curriculum', selected: false },
        { label: 'Social Innovation', selected: false },
        { label: 'Environmental Innovation', selected: false },
      ]
    },
    {
      title: 'Learning',
      selectAll: false,
      options: [
        { label: 'Startups', selected: true },
        { label: 'Innovation Projects', selected: false },
        { label: 'Corporate Innovation', selected: false },
        { label: 'Research', selected: false },
        { label: 'Academy & Curriculum', selected: false },
        { label: 'Social Innovation', selected: false },
        { label: 'Environmental Innovation', selected: false },
        { label: 'Open Innovation', selected: false },
        { label: 'Startups', selected: true },
        { label: 'Innovation Projects', selected: false },
        { label: 'Corporate Innovation', selected: false },
        { label: 'Research', selected: false },
        { label: 'Academy & Curriculum', selected: false },
        { label: 'Social Innovation', selected: false },
        { label: 'Environmental Innovation', selected: false },
        { label: 'Startups', selected: true },
        { label: 'Innovation Projects', selected: false },
        { label: 'Corporate Innovation', selected: false },
        { label: 'Research', selected: false },
        { label: 'Academy & Curriculum', selected: false },
        { label: 'Social Innovation', selected: false },
        { label: 'Environmental Innovation', selected: false },
        { label: 'Open Innovation', selected: false },
        { label: 'Startups', selected: true },
        { label: 'Innovation Projects', selected: false },
        { label: 'Corporate Innovation', selected: false },
        { label: 'Research', selected: false },
        { label: 'Academy & Curriculum', selected: false },
        { label: 'Social Innovation', selected: false },
        { label: 'Environmental Innovation', selected: false },
      ]
    },
  ];
  members = [
    { email: 'jose.jimenez@gmail.com', firstName: 'Jose', lastName: 'Jimenez' },
    { email: 'maria.lopez@example.com', firstName: 'Maria', lastName: 'Lopez' },
    { email: 'carlos.garcia@example.com', firstName: 'Carlos', lastName: 'Garcia' },
    { email: 'ana.martinez@example.com', firstName: 'Ana', lastName: 'Martinez' },
    { email: 'luis.hernandez@example.com', firstName: 'Luis', lastName: 'Hernandez' },
    { email: 'laura.perez@example.com', firstName: 'Laura', lastName: 'Perez' },
    { email: 'fernando.ruiz@example.com', firstName: 'Fernando', lastName: 'Ruiz' },
    { email: 'sofia.navarro@example.com', firstName: 'Sofia', lastName: 'Navarro' },
    { email: 'pedro.mendoza@example.com', firstName: 'Pedro', lastName: 'Mendoza' },
    { email: 'valeria.torres@example.com', firstName: 'Valeria', lastName: 'Torres' },
  ];

  section: string = 'Apperance';

  changeSection(section: string): void {
    this.section = section;
  }


  openBuyTenant () {
    this.isBuyTenant = true;
  }
  closeBuyTenant () {
    this.isBuyTenant = false;
  }

  openEditModal () {
    this.isEditMemeber = true
  }
  closeEditModal () {
    this.isEditMemeber = false
  }

  openEmailModal () {
    this.isSendMessage = true
  }
  closeEmailModal () {
    this.isSendMessage = false
  }

  openPasswordModal () {
    this.isSetNewPassword = true
  }
  closePasswordModal () {
    this.isSetNewPassword = false
  }

  openSuspendModal () {
    this.isSuspendMember = true
  }
  closeSuspendModal () {
    this.isSuspendMember = false
  } 
}
