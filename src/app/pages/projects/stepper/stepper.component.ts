import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { XcIconArrowLeftComponent, XcIconCheckComponent, XcIconFileUploadComponent, XcIconSearchComponent } from '@indziaki/ngx-xchange-icons';
import { ProjectsCardComponent } from 'src/app/pages/projects/projects-card/projects-card.component';
import { Headline400Directive } from 'projects/ngx-xchange-ui/src/directives/headline-400/headline-400.directive';
import { ButtonsWrappersDirective, ClickOutsideDirective, HeadlineStylesDirective, ProfileTagsDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    XcIconCheckComponent,
    NgFor,
    NgClass,
    NgIf,
    Headline400Directive,
    ClickOutsideDirective,
    XcIconArrowLeftComponent,
    XcIconFileUploadComponent,
    XcIconSearchComponent,
    ButtonsWrappersDirective,
    ProfileTagsDirective,
    HeadlineStylesDirective
],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements OnInit {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() totalSteps: number = 0;
  @Output() finishStepper:EventEmitter<void>=new EventEmitter<void> () 
  
  showMetrics: boolean = true;
  canCreate = false;
  actualStep: number = 1;
  stepsArray: number[] = [];
  selectedTemplate: any = null;

  
  fakeTemplates=[
    {
      "image": "https://marketplace.canva.com/EADaosozdz0/1/0/1600w/canva-purple-sky-profile-header-XBJ23wlhl0s.jpg",
      "name": "Innovación Disruptiva",
      "tags": ["Startup", "Tecnología", "Futuro"],
      "description": "Plantilla diseñada para startups que buscan presentar ideas innovadoras y disruptivas. Ideal para rondas de inversión y presentaciones de productos."
    },
    {
      "image": "https://cdn.pixabay.com/photo/2017/06/04/16/31/stars-2371478_1280.jpg",
      "name": "Transformación Digital Ágil",
      "tags": ["Transformación", "Agile", "Negocios"],
      "description": "Un template moderno y adaptable para empresas en proceso de transformación digital que adoptan metodologías ágiles."
    },
    {
      "image": "https://w0.peakpx.com/wallpaper/824/764/HD-wallpaper-galaxy-nebula-stars-milky-way-space-thumbnail.jpg",
      "name": "Inteligencia Artificial Aplicada",
      "tags": ["AI", "Machine Learning", "Datos"],
      "description": "Plantilla enfocada en la presentación de proyectos y soluciones basadas en inteligencia artificial y aprendizaje automático."
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC7WLbjYnWmbqUmXaPBn3mH51KuRQ9FUi6A&s",
      "name": "Estrategia de Marketing Digital",
      "tags": ["Marketing", "Digital", "Social Media"],
      "description": "Un diseño limpio y profesional para presentar estrategias de marketing digital y resultados de campañas en redes sociales."
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC7WLbjYnWmbqUmXaPBn3mH51KuRQ9FUi6A&s",
      "name": "Soluciones Sostenibles",
      "tags": ["Medio Ambiente", "Sostenibilidad", "Impacto"],
      "description": "Template ideal para organizaciones que promueven soluciones sostenibles y buscan generar un impacto positivo en el medio ambiente."
    }
  ]

  ngOnInit(): void {
    this.updateStepsArray();
    this.canCreate = false;
  }

  changeStep(): void {
    if (this.actualStep < this.totalSteps) {
      this.actualStep++;
      this.canCreate = this.checkAllValid();
    }
  }
  private checkAllValid(): boolean {
    if (this.actualStep === this.totalSteps) {
      return this.selectedTemplate != null;
    }
    return true;
  }
  createProject() {
    if (!this.canCreate) return;
  }

  finish(): void {
    this.finishStepper.emit();
  }

  previousStep(): void {
    if (this.actualStep > 1) {
      this.actualStep--;
    } else {
    }
  }

  updateStepsArray(): void {
    this.stepsArray = Array.from({ length: this.totalSteps }, (_, index) => index + 1);
  }

  selectTemplate(template: any) {
    this.selectedTemplate = this.selectedTemplate === template ? null : template;
    if (this.actualStep === this.totalSteps) {
      this.canCreate = this.checkAllValid();
    }
  }
}
