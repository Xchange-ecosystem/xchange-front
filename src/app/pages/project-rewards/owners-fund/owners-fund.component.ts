import { Component } from '@angular/core';
import { RoundedImageModule } from "@indziaki/ngx-xchange-ui";
import { XcIconArrowUpRightComponent } from "@indziaki/ngx-xchange-icons";
import { XcIconSaveComponent } from "@indziaki/ngx-xchange-icons";

@Component({
  selector: 'app-owners-fund',
  standalone: true,
  imports: [RoundedImageModule, XcIconArrowUpRightComponent],
  templateUrl: './owners-fund.component.html',
  styleUrl: './owners-fund.component.scss'
})
export class OwnersFundComponent {

}
