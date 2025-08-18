import  { Meta, StoryObj} from '@storybook/angular'
import { fn } from '@storybook/test'
import { Button400Component, Button400Module, CompleteObjectiveUserCardModule } from 'projects/ngx-xchange-ui/src/public-api'
import { Event } from '@angular/router';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { XcIconClockComponent } from '@xchange-ecosystem/ngx-xchange-icons';
@Component({
    selector: 'test',
    imports:[Button400Module, XcIconClockComponent,
        CompleteObjectiveUserCardModule
    ],
    standalone:true,
    template: `
    <section class="flex flex-col gap-4 p-4">
        <!-- <xc-button-400 [type]='type' [description]="description" [full]="full" (onClick)="printTest($event)">
            <xc-icon-clock />
        </xc-button-400> -->
        <xc-complete-objective-user-card [userData]="userData" (checked)="printTest($event)" [readMode]="readMode"/>
    </section>` 
})

class testComponent {
    @Input() checked: boolean = false
    @Input() readMode: boolean =false
    @Input() full: boolean = false;
    // @Output() onClick = new EventEmitter<Event>;
    printTest(event: boolean){
        // if(this.isFirst){
        //     this.isFirst = !this.isFirst
        //     return           
        // }
        // if(event !== this.event){
        //     this.event = event
        // }
        alert(`Hola mundo: ${event}`)
    }
    public isFirst = true;
    public event = false;
    public userData = {
        userId: 5,
        profilePhotoUrl: '',
        name: 'Manuel',
        lastName: 'Cabrera',
        role: 'Owner',  
        hours: 5,
        resultCount: 2,
        proofCount: 2,
        ratingCount: 2,
        ratingAverage: 5,
        isCompleted: false
    }
}

const meta: Meta<testComponent> ={
    title: 'xChange-Complete-Objective-Card', 
    component: testComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    args:{
        checked: true,
        readMode: false,
    }
}


export default meta;
type Story = StoryObj<testComponent>;

export const Filled: Story = {
    args: {
        checked: true,
        readMode: false,
    }
}
export const InactiveFilled: Story = {
    args: {
        checked: true,
        readMode: true,
    }
}
