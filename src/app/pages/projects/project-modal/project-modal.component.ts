import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [UserHeaderComponent,NgFor],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  projects = [
    {
      "name": "xchat",
      "description": "vamos por todo",
      "pictureUrl": "https://xchangeqa.blob.core.windows.net/files/bd5bbd59-0d20-4cf0-901c-1f444cc3f269.webp",
      "rate": null,
      "labels": [],
      "id": "ea80b35d-73e2-4230-ab0a-e83886ad6eae",
      "role": null,
      "createdAt": "2025-02-12T09:36:05.0366573-06:00",
      "updateAt": "0001-01-01T00:00:00",
      "ownerId": null,
      "collaboratorId": null,
      "legalEntity": null,
      "company": null,
      "country": null,
      "address": null,
      "zip": null,
      "city": null,
      "legalRepresentative": null,
      "registerNumber": null,
      "founded": null,
      "currentCapitalStock": null,
      "currentTotalSahres": null,
      "estimatedValue": null,
      "value": null,
      "vsopReserve": null,
      "esopReserve": null,
      "valuations": [],
      "currentValuation": 0,
      "fundingGoal": null,
      "aimedDateForNextFundingRound": null,
      "isClosed": false,
      "totalProjectValue": null,
      "funding": 0,
      "seed": null,
      "capitalStock": null,
      "preEvaluationNumberOfShares": null,
      "capitalInjection": null,
      "capitalInjectionNumberOfShares": null,
      "mision": null,
      "vision": null,
      "isPublic": true,
      "productId": 8,
      "developmentId": 8,
      "employees": null,
      "isArchived": false,
      "isPayable": false,
      "percentage": 0
      },
  ];
}
