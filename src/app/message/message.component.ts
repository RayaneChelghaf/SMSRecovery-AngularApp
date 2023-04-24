import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements  OnInit{

    public messages : Message[] | null  = null ;

    constructor(private providerService : ProviderService) {
    }

    ngOnInit(): void {
        this.providerService.listMessages()
            .pipe(
                tap(t => this.messages = t)
            ).subscribe() ;
    }
}

export interface Message {
  address : string ;
  body : string ;
  date : Date;
  deviceId : string;
}
