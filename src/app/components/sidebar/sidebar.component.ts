import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MENU_ITEMS } from '../menu-items';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  MENU_ITEMS = MENU_ITEMS;

  activeRoute = '/main/dashboard';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.activeRoute = this.router.url;

    this.MENU_ITEMS.forEach((result) => {
      if (this.activeRoute.toString().includes(result.route.toString())) {
        result.isActive = true;
      }
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        // You only receive NavigationStart events
        this.activeRoute = event.url;
      });
  }

  ngOnInit(): void {}

  /**
   * Activates Menu
   *
   * @param {*} index
   * @memberof SidebarComponent
   */
  openMenu(index) {
    if (!this.MENU_ITEMS[index].isActive) {
      this.MENU_ITEMS.forEach((menu) => {
        menu.isActive = false;
      });
      this.MENU_ITEMS[index].isActive = !this.MENU_ITEMS[index].isActive;
    } else {
    }

    this.activeRoute = this.MENU_ITEMS[index].route.toString();
    this.router.navigate([this.MENU_ITEMS[index].route]);
  }

  /**
   * Logs Out The Current User
   *
   * @memberof SidebarComponent
   */
  logoutSession() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}
