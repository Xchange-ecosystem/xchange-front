import { Component } from '@angular/core';
import { RoundedImageModule } from "@xchange-ecosystem/ngx-xchange-ui";
import { XcIconArrowUpRightComponent } from "@xchange-ecosystem/ngx-xchange-icons";
import { XcIconSaveComponent } from "@xchange-ecosystem/ngx-xchange-icons";

@Component({
  selector: 'app-owners-fund',
  standalone: true,
  imports: [RoundedImageModule, XcIconArrowUpRightComponent],
  templateUrl: './owners-fund.component.html',
  styleUrl: './owners-fund.component.scss'
})
export class OwnersFundComponent {

}
