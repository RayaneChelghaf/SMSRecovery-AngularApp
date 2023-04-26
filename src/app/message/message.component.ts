import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {tap} from "rxjs";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class DeviceComponent implements OnInit {

    public messages: Message[] | null = null;

    constructor(private providerService: ProviderService) {
    }

    ngOnInit(): void {
        this.providerService.listMessages()
            .pipe(
                tap(t => this.messages = t)
            ).subscribe();
    }
}

export interface Message {
    address: string;
    body: string;
    date: Date;
    deviceId: string;
    label: string;
}



// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort, Sort } from '@angular/material/sort';
// import { ProviderService } from '../services/provider.service';
// import { tap } from 'rxjs/operators';

// @Component({
//   selector: 'app-message',
//   templateUrl: './message.component.html',
//   styleUrls: ['./message.component.css'],
// })
// export class DeviceComponent implements OnInit {
//   public messages: Message[] | null = null;
//   displayedColumns: string[] = ['date', 'address', 'body', 'label', 'deviceId'];
//   @ViewChild(MatSort) sort: MatSort
// //    | undefined
// ;

//   constructor(private providerService: ProviderService) {}

//   ngOnInit(): void {
//     this.providerService
//       .listMessages()
//       .pipe(tap((t) => (this.messages = t)))
//       .subscribe();
//   }

//   applyFilter(filterValue: string) {
//     if (this.messages) {
//       this.messages = this.messages.filter((message) =>
//         message.body.toLowerCase().includes(filterValue.toLowerCase())
//       );
//     }
//   }
// }

// export interface Message {
//   address: string;
//   body: string;
//   date: Date;
//   deviceId: string;
//   label: string;
// }