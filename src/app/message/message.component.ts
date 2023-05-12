import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {tap} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class DeviceComponent implements OnInit {

    public messages: Message[] | null = null;

    dataSource = new MatTableDataSource<Message>([]);
    displayedColumns = ["address", "body", "date", "deviceId", "label"];
    filter: string = '';

    @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
    @ViewChild(MatSort) sort: MatSort | null = null;

    constructor(private providerService: ProviderService, private router: Router, private route: ActivatedRoute, private cd: ChangeDetectorRef) {
    }

    ngOnInit(): void {

        this.route.queryParamMap.pipe(
            tap(params => this.filter = params.get('q') || ''),
            tap(_ => console.log('route changed')),
            tap(_ => this.dataSource.filter = this.filter)
        ).subscribe();

        this.providerService.listMessages().pipe(
            tap(t => this.messages = t),
            tap(t => {
                if (this.messages && this.messages.length) {
                    this.dataSource = new MatTableDataSource<Message>(this.messages);
                    this.reconnectSortAndPaginator();
                }
            }),
            tap(_ => this.dataSource.filter = this.filter)
        ).subscribe() ;
    }

    navigateToRoute() {
        const queryParams = {q: this.filter};
        this.router.navigate([], {queryParams});
    }


    private reconnectSortAndPaginator() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.dataSource.filterPredicate = (data: Message) => {
            if (!this.filter)
                return true;

            const compareChunks = [data.deviceId, data.label, data.body];

            for (let chunk of compareChunks) {
                if (chunk.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0) {
                    return true;
                }
            }
            return false;
        };
    }

}

export interface Message {
    address: string;
    body: string;
    date: Date;
    deviceId: string;
    label: string;
}
