import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProviderService } from "../services/provider.service";
import { tap } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class DeviceComponent implements OnInit, AfterViewInit {

  public messages: Message[] | null = null;

  dataSource = new MatTableDataSource<Message>([]);
  displayedColumns = ["address", "body", "date", "deviceId", "label"];
  filter: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private providerService: ProviderService, private router: Router, private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    this.reconnectSortAndPaginator();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filter = filterValue.trim().toLowerCase();
    const queryParams = { q: this.filter };
    this.router.navigate([], { queryParams });
    this.dataSource.filter = this.filter;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private reconnectSortAndPaginator() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.filter = params.get('q') || '';
      this.dataSource.filter = this.filter;
    });

    this.providerService.listMessages()
      .pipe(
        tap(t => this.messages = t),
        tap(t => {
          if (this.messages && this.messages.length) {
            this.dataSource = new MatTableDataSource<Message>(this.messages);
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
