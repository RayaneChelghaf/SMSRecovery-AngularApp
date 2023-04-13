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