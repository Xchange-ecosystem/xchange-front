import { Component, Input } from '@angular/core';
import { XcIconCheckCircleComponent, XcIconSaveComponent } from 'projects/ngx-xchange-icons/src/public-api';
import { ButtonsWrappersDirective, CopyStylesDirective, HeadlineStylesDirective, RoundedImageModule } from 'projects/ngx-xchange-ui/src/public-api';
import { InterestsProfileComponent } from '../interests-profile/interests-profile.component';
import { InterestCardComponent } from '../interest-card/interest-card.component';
import { XcIconArrowRightComponent, XcIconStarComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { ProfileSortComponent } from '../profile-sort/profile-sort.component';

@Component({
  selector: 'app-premium-settings',
  standalone: true,
  imports: [
    XcIconCheckCircleComponent,
    CopyStylesDirective,
    ButtonsWrappersDirective,
    InterestsProfileComponent,
    XcIconSaveComponent,
    HeadlineStylesDirective,
    InterestCardComponent,
    XcIconArrowRightComponent,
    RoundedImageModule,
    ProfileSortComponent,
    XcIconStarComponent
  ],
  templateUrl: './premium-settings.component.html',
  styleUrl: './premium-settings.component.scss'
})
export class PremiumSettingsComponent {
    isCancelOpen=false;
      tempDescription = '';
      tempEmail = '';
      tempLinkedin = '';
    selectedInterests: { interest: string | null; level: number }[] = [];
      interestOptions = [
    { value: 'design',    label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'dev',       label: 'Development' },
    { value: 'ux',        label: 'UX/UI' },
    { value: 'data',      label: 'Data Science' },
  ];
    @Input() image: string = 'https://randomuser.me/api/portraits/women/26.jpg'

  openCancel(){
    this.isCancelOpen = true
  }

    getFilteredOptions(idx: number) {
    const taken = this.selectedInterests
      .filter((_, i) => i !== idx)
      .map(sel => sel.interest)
      .filter((v): v is string => v !== null);

    return this.interestOptions.filter(opt => !taken.includes(opt.value));
  }

  
  onInterestSelected(event: { interest: string; level: number }, idx: number) {
    this.selectedInterests[idx] = event;
  }

  addSelector() {
    this.selectedInterests.push({ interest: null, level: 0 });
  }
}
