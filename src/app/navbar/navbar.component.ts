import { Component } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode = false;

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  }

