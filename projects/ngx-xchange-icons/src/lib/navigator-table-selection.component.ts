import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-navigator-table-selection',
  standalone:true,
  template: `
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 40 40" fill="none">
<rect x="8" y="11.5" width="3" height="3" rx="1.5" fill="#111111" stroke="#111111" stroke-width="2"/>
<rect x="8" y="18.5" width="3" height="3" rx="1.5" fill="#111111" stroke="#111111" stroke-width="2"/>
<rect x="8" y="25.5" width="3" height="3" rx="1.5" fill="#111111" stroke="#111111" stroke-width="2"/>
<path d="M15 13H31" stroke="#111111" stroke-width="2" stroke-linecap="round"/>
<path d="M15 20H31" stroke="#111111" stroke-width="2" stroke-linecap="round"/>
<path d="M15 27H31" stroke="#111111" stroke-width="2" stroke-linecap="round"/>
</svg>
`,
  styles: [
  ]
})
export class XcIconNavigatorTableSelectionComponent {

}