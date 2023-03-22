// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-devices',
//   templateUrl: './devices.component.html',
//   styleUrls: ['./devices.component.css']
// })
// export class DevicesComponent {
// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  template: `
    <h2>Devices List</h2>
    <p>This is the list of available devices</p>
  `
})
export class DevicesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}