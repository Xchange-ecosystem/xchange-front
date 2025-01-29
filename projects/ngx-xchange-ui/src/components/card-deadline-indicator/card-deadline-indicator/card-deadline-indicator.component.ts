import { Component, Input } from '@angular/core';

@Component({
    selector: 'xc-card-deadline-indicator',
    templateUrl: './card-deadline-indicator.component.html',
    styleUrls: ['./card-deadline-indicator.component.css'],
    standalone: false
})
export class CardDeadlineIndicatorComponent {
@Input()
deadline: String | undefined;
@Input()
deadLineToShow: String
@Input()
icon: String

constructor() {
  this.deadLineToShow = ''
  this.icon = ''
}

ngOnInit(){
 if(this.deadline !== undefined && this.deadline !== "" && this.deadline !== " "){
    const[year, month, day] = this.deadline.split("T")[0].split("-");
    const numericMonth = parseInt(month)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];
    this.deadLineToShow = `${day}, ${months[ numericMonth - 1 ]} ${year}`;
  }else{
    this.deadLineToShow = "Deadline date";
  }
}



}
