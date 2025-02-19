import  { Meta, StoryObj} from '@storybook/angular'
import { fn } from '@storybook/test'
import { Button400Component } from 'projects/ngx-xchange-ui/src/public-api'
import { Event } from '@angular/router';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Button400Module } from '@indziaki/ngx-xchange-ui';
import { XcIconClockComponent } from '@indziaki/ngx-xchange-icons';
@Component({
    selector: 'test',
    imports:[Button400Module, XcIconClockComponent],
    standalone:true,
    template: `
    <section class="flex flex-col gap-4 p-4">
        <xc-button-400 [type]='type' [description]="description" [full]="full" (onClick)="printTest($event)">
            <div class="w-4 h-4 fill-white stroke-white">
            <xc-icon-clock />
            </div>
        </xc-button-400>
    </section>` 
})

class testComponent {
    @Input() type: string = ''
    @Input() description: string = ''
    @Input() full: boolean = false;
    // @Output() onClick = new EventEmitter<Event>;
    printTest(event: Event){
        alert('Hola mundo')
    }
}

const meta: Meta<testComponent> ={
    title: 'xChange-Button-400', 
    component: testComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    args:{
        full: false,
        description: 'Hello',
        type: ''
    }
}


export default meta;
type Story = StoryObj<testComponent>;

export const Filled: Story = {
    args: {
        description: 'click here',
        type: 'filled',
    }
}
export const InactiveFilled: Story = {
    args: {
        description: 'Hello',
        type: 'filled_inactive'
    }
}
export const Cancel: Story = {
    args: {
        description: 'Where aer you',
        type: 'cancel'
    }
}