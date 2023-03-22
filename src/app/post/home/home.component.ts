// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   template: '<h2>Home Component</h2>'
// })
// export class HomeComponent {

// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   constructor() { }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Welcome to the Home Page</h2>
    <p>This is the home page of our application</p>
  `
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
