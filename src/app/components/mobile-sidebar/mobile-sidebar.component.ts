import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MENU_ITEMS } from '../menu-items';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.css']
})
export class MobileSidebarComponent implements OnInit {

  MENU_ITEMS = MENU_ITEMS

  activeRoute = ''

  constructor(
    private router: Router
  ) {
    this.activeRoute = this.router.url;

    this.MENU_ITEMS.forEach((result) => {
      if (this.activeRoute.toString().includes(result.route.toString())) {
        result.isActive = true
      }
    })

    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        // You only receive NavigationStart events
        this.activeRoute = event.url
      });
  }

  ngOnInit(): void {
  }


  /**
   * Activates Menu
   *
   * @param {*} index
   * @memberof SidebarComponent
   */
  openMenu(index) {
    if (!this.MENU_ITEMS[index].isActive) {
      this.MENU_ITEMS.forEach((menu) => {
        menu.isActive = false
      })
      this.MENU_ITEMS[index].isActive = !this.MENU_ITEMS[index].isActive
    } else {
    }

    this.activeRoute = this.MENU_ITEMS[index].route.toString()
    this.router.navigate([this.MENU_ITEMS[index].route])
  }
}
