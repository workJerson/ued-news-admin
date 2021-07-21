import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { RootState, selectUser } from 'src/app/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
  ]
})
export class MainComponent implements OnInit {

  isSideMenuOpen: boolean = false;

  currentUser: User

  dark: boolean = false

  isProfileMenuOpen: boolean = false

  constructor(
    private router: Router,
    private store: Store<RootState>
  ) {
    this.store.pipe(select(selectUser), take(1))
      .subscribe((result) => {
        console.log(result)
        this.currentUser = result
      })
  }

  ngOnInit(): void {
  }

  /**
   * Toggles Theme
   *
   * @memberof MainComponent
   */
  toggleTheme() {
    this.dark = !this.dark

    if (this.dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  /**
   * Open Profile Menu
   *
   * @memberof MainComponent
   */
  openProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen
  }

  /**
   * Route to profile page
   *
   * @memberof MainComponent
   */
   routeToProfilePage() {
    this.router.navigate(
      [
        '/main/profile'
      ]
    )
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
