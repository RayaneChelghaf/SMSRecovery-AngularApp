import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import Validation from './utils/validation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMSRecovery-AngularApp';
}



// import { Component, OnInit } from '@angular/core';
// import { DialogService } from './services/dialog.service';
// import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import Validation from './utils/validation';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'SMSRecovery-AngularApp';

//   constructor(private dialog: DialogService) {}

//   yesNoDialog() {
//     this.dialog
//       .confirmDialog({
//         title: 'Are you sure?',
//         message: 'Are you sure you want to do this?',
//         confirmCaption: 'Yes',
//         cancelCaption: 'No',
//       })
//       .subscribe((yes) => {
//         if (yes) console.log('The user said YES');
//       });
//   }

//   confirmCancelDialog() {
//     this.dialog
//       .confirmDialog({
//         title: 'Confirm Action',
//         message: 'Do you want to confirm this action?',
//         confirmCaption: 'Confirm',
//         cancelCaption: 'Cancel',
//       })
//       .subscribe((confirmed) => {
//         if (confirmed) console.log('The user confirmed the action');
//       });
//   }
// }