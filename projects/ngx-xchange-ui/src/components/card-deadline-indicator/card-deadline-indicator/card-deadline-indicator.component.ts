import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-card-deadline-indicator',
  templateUrl: './card-deadline-indicator.component.html',
  styleUrls: ['./card-deadline-indicator.component.css']
})
export class CardDeadlineIndicatorComponent {
@Input()
deadline: Date | undefined;
@Input()
deadLineToShow: String

constructor() {
  this.deadLineToShow = ''
}

ngOnInit(){
  if(this.deadline !== undefined) {
    const[year, month, day] = this.deadline.toISOString().split("T")[0].split("-");
    const numericMonth = parseInt(month)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];
    this.deadLineToShow = `${day}, ${months[ numericMonth - 1 ]} ${year}`;
  }else{
    this.deadLineToShow = "Deadline date";
  }
}


}
