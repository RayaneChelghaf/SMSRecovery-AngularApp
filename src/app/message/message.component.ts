import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {tap} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class DeviceComponent implements OnInit, AfterViewInit {

    public messages: Message[] | null = null;

   dataSource = new MatTableDataSource<Message>([]);
   displayedColumns = ["address", "body", "date", "deviceId", "label"];

    @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
    @ViewChild(MatSort) sort: MatSort | null = null;


    constructor(private providerService: ProviderService) {
    }

    ngAfterViewInit(): void {
        this.reconnectSortAndPaginator();
    }

    private reconnectSortAndPaginator() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    ngOnInit(): void {
        this.providerService.listMessages()
            .pipe(
                tap(t => this.messages = t),
                tap(t => {
                    if (this.messages && this.messages.length ) {
                        this.dataSource = new MatTableDataSource<Message>(this.messages)  ;
                        this.reconnectSortAndPaginator();
                    }
                })
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
