import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  XcIconAIComponent,
  XcIconArrowRightComponent,
  XcIconCheckCircleComponent,
  XcIconCheckComponent,
  XcIconCloseSComponent,
  XcIconCopyComponent,
  XcIconPlusCircleComponent,
  XcIconSaveComponent,
  XcIconStarComponent,
} from '@indziaki/ngx-xchange-icons';
import { ToggleComponent } from 'projects/ngx-xchange-ui/src/components/toggle/toggle.component';
import { CopyStylesDirective } from 'projects/ngx-xchange-ui/src/directives/copy-styles/copy-styles.directive';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import { ButtonsWrappersDirective, ProfileTagsDirective, RateModule, RoundedImageModule } from 'projects/ngx-xchange-ui/src/public-api';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { FormsModule } from '@angular/forms';
import { LanguageDropdownComponent } from './language-dropdown/language-dropdown.component';
import { InterestsProfileComponent } from './interests-profile/interests-profile.component';
import { InterestCardComponent } from './interest-card/interest-card.component';
import { ProfileSortComponent } from './profile-sort/profile-sort.component';
import { WalletComponent } from './wallet/wallet.component';
import { AppereanceComponent } from './appereance/appereance.component';
import { PremiumSettingsComponent } from './premium-settings/premium-settings.component';
import { PremiumUpgradeComponent } from './premium-upgrade/premium-upgrade.component';
import { TagModalComponent } from './tag-modal/tag-modal.component';
import { CancelModalComponent } from './cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    XcIconSaveComponent,
    ProfileTagsDirective,
    XcIconArrowRightComponent,
    XcIconCopyComponent,
    ToggleComponent,
    CopyStylesDirective,
    NgIf,
    NgFor,
    ButtonsWrappersDirective,
    XcIconCloseSComponent,
    XcIconAIComponent,
    XcIconPlusCircleComponent,
    HeadlineStylesDirective,
    XcIconCheckCircleComponent,
    XcIconStarComponent,
    XcIconCheckComponent,
    RateModule,
    ProfileHeaderComponent,
    LanguageDropdownComponent,
    FormsModule,
    InterestsProfileComponent,
    InterestCardComponent,
    ButtonsWrappersDirective,
    RoundedImageModule,
    ProfileSortComponent,
    WalletComponent,
    AppereanceComponent,
    PremiumSettingsComponent,
    PremiumUpgradeComponent,
    TagModalComponent,
    CancelModalComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  @Input() email: string = 'fabian@xchange.eco';
  @Input() linkedin: string = 'https://www.linkedin.com/in/fabian-bermeo';
  @Input()description: string = `I founded COBIOM as a network of professionals who believe that
  collaboration and cocreation are our best tools to transform
  businesses into agents for a better future. As Director and head of
  strategy and product development, my great team and I develop the
  COBIOM ecosystem as a consultancy, coworking and learning platform
  that provides end-to-end services from intent to implementation in
  innovation and business transformation.`;
  @Input() image: string = 'https://randomuser.me/api/portraits/women/26.jpg'
  activeSection: string = 'Apperance';
  tempDescription = '';
  tempEmail = '';
  tempLinkedin = '';
  isTagsOpen = false;
  isCancelOpen=false;
  isCancelToast=false;
  selectedLang: string | null = null;
  editingDescription = false;
  editingEmail       = false;
  editingLinkedin    = false;
  editing = false;



  invoiceData = [
    {
      invoiceName: "John Doe",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Jane Smith",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Michael Johnson",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Emily Davis",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Daniel Martinez",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Laura Hernandez",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Carlos López",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Natalie Wilson",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    }
  ];
  
  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
  ];

  interestOptions = [
    { value: 'design',    label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'dev',       label: 'Development' },
    { value: 'ux',        label: 'UX/UI' },
    { value: 'data',      label: 'Data Science' },
  ];

  tableData = [
    {
      project: 'OneLife – Xchange Studio project',
      contributed: '500 xCoins',
      current: '500 xCoins',
      status: 'Open',
      statusTag: 'yellow'
    },
    {
      project: 'Coop Master',
      contributed: '250 xCoins',
      current: '252 xCoins',
      status: 'Confirmed',
      statusTag: 'green'
    },
    {
      project: 'NextGen LLL – Xchange Studio project',
      contributed: '750 xCoins',
      current: '760 xCoins',
      status: 'Pending',
      statusTag: 'yellow'
    },
    {
      project: 'NextGen LLL – Xchange Studio project',
      contributed: '750 xCoins',
      current: '760 xCoins',
      status: 'Confirmed',
      statusTag: 'green'
    },
    {
      project: 'NextGen LLL – Xchange Studio project',
      contributed: '750 xCoins',
      current: '760 xCoins',
      status: 'Pending',
      statusTag: 'yellow'
    }
  ]
  selectedInterests: { interest: string | null; level: number }[] = [];

  ngOnInit() {
    this.selectedInterests = Array.from({ length: 5 }, () => ({
      interest: null,
      level: 0
    }));
  }


  closeDialog() {
    alert('Dialog closed');
  }

  openTags() {
    this.isTagsOpen = true;
  }
  closeTags() {
    this.isTagsOpen = false;
  }

  onSectionChange(section: string): void {
    this.activeSection = section;
  }

  onLanguageChange(newLang: string) {
    this.selectedLang = newLang;
  }

  editDescription() {
    this.tempDescription = this.description;
    this.editingDescription = true;
  }
  saveDescription() {
    this.description = this.tempDescription.trim();
    this.editingDescription = false;
  }
  cancelDescription() {
    this.editingDescription = false;
  }
  editEmail() {
    this.tempEmail = this.email;
    this.editingEmail = true;
  }
  saveEmail() {
    this.email = this.tempEmail.trim();
    this.editingEmail = false;
  }
  cancelEmail() {
    this.editingEmail = false;
  }
  editLinkedin() {
    this.tempLinkedin = this.linkedin;
    this.editingLinkedin = true;
  }
  saveLinkedin() {
    this.linkedin = this.tempLinkedin.trim();
    this.editingLinkedin = false;
  }
  cancelLinkedin() {
    this.editingLinkedin = false;
  }


}
