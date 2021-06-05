import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public pageTitle: string = `The one and only cryptocurrency environmental friendly`;
  items: MenuItem[];

  activeItem: MenuItem;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: '/welcome',
        routerLinkActiveOptions: 'active',
      },

      {
        label: 'Our Team',
        icon: PrimeIcons.USERS,
        routerLink: '/team',
        routerLinkActiveOptions: 'active',
      },
      {
        label: 'Buy',
        icon: PrimeIcons.SHOPPING_CART,
        routerLink: '/buy',
        routerLinkActiveOptions: 'active',
      },
      {
        label: 'Contact',
        icon: PrimeIcons.WALLET,
        routerLink: '/login',
        routerLinkActiveOptions: 'active',
      },
    ];

    this.activeItem = this.items[0];
  }
}
