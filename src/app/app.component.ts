import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  abierto=true

  public collaborator: {
    userId: number,
    name: string;
    lastName: string;
    profilePhotoUrl: string | null;
  }[] = [

{    userId: 1,
    name: 'Manu',
    lastName: 'Cabrera',
    profilePhotoUrl: null
  },
{   userId: 2,
    name: 'Jesus',
    lastName: 'Sierra',
    profilePhotoUrl: null
  }
  ];

  userArray: number[] = []//this.collaborator.map(c => c.userId)
}
