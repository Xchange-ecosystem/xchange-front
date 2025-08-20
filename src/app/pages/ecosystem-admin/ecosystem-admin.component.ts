import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconArrowRightComponent, XcIconBanComponent, XcIconCloseSComponent, XcIconEditComponent, XcIconEnvelopeComponent, XcIconPadlockComponent, XcIconSaveComponent, XcIconSearchComponent, XcIconSendComponent, XcIconShoppingCartComponent, XcIconTimesComponent, XcIconUserComponent, XcIconUserPlusComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { ProfileTagsDirective, RoundedImageModule, ToggleComponent } from '@xchange-ecosystem/ngx-xchange-ui';
import { ApperanceComponent } from './apperance/apperance.component';
import { LegalComponent } from './legal/legal.component';
import { CreditsComponent } from './credits/credits.component';
import { TemplatesComponent } from './templates/templates.component';
import { MembersComponent } from './members/members.component';

@Component({
  selector: 'app-ecosystem-admin',
  standalone: true,
  imports: [
    ProfileTagsDirective,
    RoundedImageModule,
    NgIf,
    NgClass,
    NgFor,
    XcIconTimesComponent,
    XcIconShoppingCartComponent,
    ApperanceComponent,
    LegalComponent,
    CreditsComponent,
    TemplatesComponent,
    MembersComponent
  ],
  templateUrl: './ecosystem-admin.component.html',
  styleUrl: './ecosystem-admin.component.scss'
})
export class EcosystemAdminComponent {
  isNotification = false;

  isBuyTenant = false;

  tempImage = "https://lh3.googleusercontent.com/a-/ALV-UjWBPEgImeAd-djw96NL4WF8xLI_JH3DbdkDsm-mmc7JjuXTCTXOZA8RbLgqtKSBbj9wgNTzghEZGdrJd0qKXkl7Qk8eROaPBrzCa_-HevwHm24u8r0VbtRCI8U7Mitcn404HcQ3Q_Z5OOanSyxk5RVJmvBkOrBASppT7mfsyfaLpa__0REuARYQW_kuqBQ2XusZcvaAEzvZ9hZ76ISVWZpubpwahABqOKV7tOX0iWGklH6hErJU--8aZyTSxm5AAiJed2gonzdz4t515lrNWGVpdGCScjvAzUXZ3U6Wh3boiyICBGxfMT-gtTBxWlfWNRJV3dsc5kYiIOilnU61ub10pZKqfO4x5GFIsxlQqz9EAZg6buZtgYtKgGqO_mK59cgogeDJb_njHxVpMoL3Zp5u1tG6qSWPNv539xY88ffW3J34jV6BXkMEO3MFKD3UiRV6AAbWe58gbAjjoK87nhus59oiDdDA2pKxwRN5OKN78ecdK4kepBJuSuNoLwgpPn624UeTei3v8b03Be9FNO6BaFkhB5hguYQDkMAN5mGwLTXbcZzrIb9EM0ImpluHV-_1cNvZ2w2KYR6y7GT-zuqa9fUiww3DO4jVyIH0GT0IB8V8X-Iog968OImfHSlrQSu0Co6j3XTGs0_nH9vTP62xPM3ZDtp6LdQf3ZacBjPI07bCDGGiznVQ52KPhHfX5uefcvdSy8hZKLSiOi22r5HrtrzAVr6ads4jLahOyxt8FlS8S2mxdughUqhBom4tP-WSP7E4GE9IZai3tTHrI8zXApsunxtLlqSgs5twmWJPxia2OcMSHbNVtFo7cCdnCXZ4eaSU9iRyfs4IQLuZks1soVhXJa3ZxkebOxjqnLeOqmBNbSH-BGFVSBNdVXzVdLOrrywyaLfMENyRRCY7XJAxefi3f9K-bOmwBP3llMgCX7QkjRH_BfEzaFUCNG8khfusV9ZP8qWqLRXbhNroGeAfVoYAE4_B=s64-w64-h64-c-k-no";

  sections = [
    'Apperance', 
    'Legal', 
    'Credits', 
    'Templates', 
    'Members'
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







}
