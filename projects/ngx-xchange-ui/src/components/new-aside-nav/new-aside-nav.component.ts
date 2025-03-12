import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconRocketComponent } from 'projects/ngx-xchange-icons/src/lib/rocket.component';
import {XcIconCloudWifiComponent} from 'projects/ngx-xchange-icons/src/lib/cloud-wifi.component';

@Component({
  selector: 'xc-new-aside-nav',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, XcIconRocketComponent],
  templateUrl: './new-aside-nav.component.html',
  styleUrl: './new-aside-nav.component.css'
})
export class NewAsideNavComponent {
  navItems = [
    { icon: "xc-icon-cloud-wifi", label: "Feed", link: "/feed" },
    { icon: "xc-icon-rocket", label: "Project", link: "/analytics" },
    { icon: "users", label: "Community", link: "/users" },
    { icon: "bar-chart", label: "Dashboard", link: "/dashboard" },
    { icon: "gear", label: "Admin", link: "/admin" },
  ]

  bottomNavItems = [
    { icon: "user", label: "My Profile", link: "/profile" },
    { icon: "settings", label: "Settings", link: "/settings" },
    { icon: "log-out", label: "Log Out", link: "/logout" },
  ]

}
