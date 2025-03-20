import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ProfileTagsDirective } from '../../directives/profile-tags/profile-tags.directive';

@Component({
  selector: 'xc-feed-objective',
  standalone: true,
  imports: [NgFor,ProfileTagsDirective,NgIf,NgClass],
  templateUrl: './feed-objective.component.html',
  styleUrl: './feed-objective.component.css'
})
export class FeedObjectiveComponent {
mockData = [
  {
    title:"Front task 1",
    tags:["tag1", "tag2"],
    totalTasks: 10,
    completedTasks: 5,
    proofs:2,
    deadlineDate: "2021-12-12",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    type: "objective",
  },
  {
    title:"Objective task 1",
    tags:["tag1", "tag2"],
    totalTasks: 10,
    completedTasks: 5,
    proofs:2,
    deadlineDate: "2021-12-12",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    type: "assignment",
  },
  {
    title:"Next steps task 1",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    type: "nextSteps",
  },
  {
    title:"Front task 2",
    tags:["tag1", "tag2", "tag3"],
    totalTasks: 3,
    completedTasks: 1,
    proofs:4,
    deadlineDate: "2022-12-12",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    type: "objective",
  },
]
}
