import  { Meta, StoryObj} from '@storybook/angular'
import { fn } from '@storybook/test'
import { Button400Component } from 'projects/ngx-xchange-ui/src/public-api'
import { Event } from '@angular/router';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { NavigatorObjectiveCardModule } from 'projects/ngx-xchange-ui/src/components/navigator-objective-card/navigator-objective-card.module';

type ObjectiveCardInformation = {
    name: string;
    totalTasks: number;
    tasksCompleted: number;
    proofsCount: number;
    startDate: string;
    status: Status
  };
  
  type Status = 'new' |'completed' | 'open' | 'suggested';

@Component({
    selector: 'test',
    imports:[NavigatorObjectiveCardModule],
    standalone:true,
    template: `
    <section class="flex flex-col w-[428px] gap-4 p-4 bg-red">
        <xc-navigator-objective-card [objectiveInformation]="objectiveInformation"/>
    </section>` 
})

class NavigatorCardStory {
    public objectiveInformation: ObjectiveCardInformation = {
        name: '',
        totalTasks: 0,
        tasksCompleted: 0,
        proofsCount: 0,
        startDate: '',
        status: 'new'
    }
}

const meta: Meta<NavigatorCardStory> ={
    title: 'xChange-Navigator-Objective-Card', 
    component: NavigatorCardStory,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    args:{
        objectiveInformation: {
            name: 'hola chuy quiobole como andas',
            totalTasks: 6,
            tasksCompleted: 2,
            proofsCount: 6,
            startDate: '30 feb 2024',
            status: 'open'
        }
    }
}


export default meta;
type Story = StoryObj<NavigatorCardStory>;

export const NewObjective: Story = {
    args: {
        objectiveInformation: {
            name: 'hola chuy quiobole como andas',
            totalTasks: 6,
            tasksCompleted: 2,
            proofsCount: 6,
            startDate: '30 feb 2024',
            status: 'new'
        }
    }
}
export const OpenObjective: Story = {
    args: {
        objectiveInformation: {
            name: 'hola chuy quiobole como andas',
            totalTasks: 6,
            tasksCompleted: 2,
            proofsCount: 6,
            startDate: '30 feb 2024',
            status: 'open'
        }
    }
}
export const CompletedObjective: Story = {
    args: {
        objectiveInformation: {
            name: 'hola chuy quiobole como andas',
            totalTasks: 6,
            tasksCompleted: 2,
            proofsCount: 6,
            startDate: '30 feb 2024',
            status: 'completed'
        }
    }
}
export const SuggestedObjective: Story = {
    args: {
        objectiveInformation: {
            name: 'hola chuy quiobole como andas',
            totalTasks: 6,
            tasksCompleted: 2,
            proofsCount: 6,
            startDate: '30 feb 2024',
            status: 'suggested'
        }
    }
}