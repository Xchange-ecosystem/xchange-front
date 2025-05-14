import { Component, inject, OnInit } from '@angular/core';
import { SwitchViewService, ViewStates } from '../services/swith-view-service/switch-view.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rewards-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './rewards-header.component.html',
  styleUrl: './rewards-header.component.scss',
})
export class RewardsHeaderComponent implements OnInit {
  public switchViewService = inject(SwitchViewService);
  state:ViewStates = 'default';

  constructor () {
    this.switchViewService.setViewState('default')
  }
  defaultHeaderImage = 'assets/img/Goals-header.png';
  switchPageImage ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTSbD3EVLf3-ZESsX9YbUIknHrUKG2jc8sA&s';
  defaultTitle = ''

  privateImageDirectory: Record<string, string> = {
    default: this.defaultHeaderImage,
    collaborations: this.switchPageImage,
    employee: this.switchPageImage,
    owners: this.switchPageImage,
  };

  privateTitleDirectory: Record<string, string> = {
    default: '',
    collaborations: 'Collaboration fund',
    employee: 'Employee fund',
    owners: 'Owners fund',
  };

  ngOnInit(): void {
    this.switchViewService.getViewState().subscribe(state => this.state = state)
    this.switchViewService.getViewState().subscribe(state => {
      this.state = state;
      this.defaultHeaderImage = this.setHeaderImage()
    })
    this.switchViewService.getViewState().subscribe(state => {
      this.state = state;
      this.defaultTitle = this.setHeaderTitle()
    })
  }

  setHeaderTitle(): string {
    console.log('cambio en header', this.state)
    return this.privateTitleDirectory[this.state];
  }

  setHeaderImage(): string {
    return this.privateImageDirectory[this.state];
  }
}
