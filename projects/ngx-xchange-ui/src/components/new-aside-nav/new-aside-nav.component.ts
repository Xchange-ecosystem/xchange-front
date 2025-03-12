import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { AsideLinksComponent } from 'projects/ngx-xchange-ui/src/components/aside-links/aside-links.component';
import { XcIconRocketComponent } from 'projects/ngx-xchange-icons/src/lib/rocket.component';
import { XcIconWifiComponent } from 'projects/ngx-xchange-icons/src/lib/wifi.component';
import { XcIconUsersAltComponent } from 'projects/ngx-xchange-icons/src/lib/users-alt.component';
import { XcIconChartBarComponent } from 'projects/ngx-xchange-icons/src/lib/chart-bar.component';
import { XcIconSettingComponent } from 'projects/ngx-xchange-icons/src/lib/setting.component';

@Component({
  selector: 'xc-new-aside-nav',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, AsideLinksComponent, XcIconRocketComponent, XcIconWifiComponent, XcIconUsersAltComponent, XcIconChartBarComponent, XcIconSettingComponent],
  templateUrl: './new-aside-nav.component.html',
  styleUrl: './new-aside-nav.component.css'
})
export class NewAsideNavComponent {
  bottomNavItems = [
    { icon: "user", label: "My Profile", link: "/profile" },
    { icon: "settings", label: "Settings", link: "/settings" },
    { icon: "log-out", label: "Log Out", link: "/logout" },
  ]

}
