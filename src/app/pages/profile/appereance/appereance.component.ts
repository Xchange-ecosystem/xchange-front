import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { LanguageDropdownComponent } from '../language-dropdown/language-dropdown.component';
import { CopyStylesDirective } from 'projects/ngx-xchange-ui/src/directives/copy-styles/copy-styles.directive';
import { ProfileTagsDirective } from 'projects/ngx-xchange-ui/src/directives/profile-tags/profile-tags.directive';
import { FormsModule } from '@angular/forms';
import { XcIconSaveComponent } from 'projects/ngx-xchange-icons/src/public-api';
import { XcIconAIComponent, XcIconArrowRightComponent, XcIconCloseSComponent, XcIconCopyComponent, XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { ToggleComponent } from '@indziaki/ngx-xchange-ui';
import { TagModalComponent } from '../tag-modal/tag-modal.component';
@Component({
  selector: 'app-appereance',
  standalone: true,
  imports: [
    LanguageDropdownComponent,
    CopyStylesDirective,
    ProfileTagsDirective,
    XcIconSaveComponent,
    FormsModule,
    XcIconCopyComponent,
    XcIconArrowRightComponent,
    ToggleComponent,
    CopyStylesDirective,
    NgIf,
    TagModalComponent,
    XcIconCloseSComponent,
    XcIconPlusCircleComponent,
    XcIconAIComponent
  ],
  templateUrl: './appereance.component.html',
  styleUrl: './appereance.component.scss'
})
export class AppereanceComponent {
  @Input() email: string = 'fabian@xchange.eco';
  @Input() linkedin: string = 'https://www.linkedin.com/in/fabian-bermeo';
  @Input() description: string = `I founded COBIOM as a network of professionals who believe that
  collaboration and cocreation are our best tools to transform
  businesses into agents for a better future. As Director and head of
  strategy and product development, my great team and I develop the
  COBIOM ecosystem as a consultancy, coworking and learning platform
  that provides end-to-end services from intent to implementation in
  innovation and business transformation.`;
  @Input() image: string = 'https://randomuser.me/api/portraits/women/26.jpg'
  tempDescription = '';
  tempEmail = '';
  tempLinkedin = 'https://www.linkedin.com/in/fabian-bermeo';
  editingDescription = false;
  editingEmail = false;
  editingLinkedin = false;
  editing = false;
  isTagsOpen = false;
  selectedLang: string | null = null;


  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
  ];

  saveChanges() {
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

  onLanguageChange(newLang: string) {
    this.selectedLang = newLang;
  }




  openTags() {
    this.isTagsOpen = true;
  }
  closeTags() {
    this.isTagsOpen = false;
  }
}
