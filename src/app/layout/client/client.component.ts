import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientList ;
  p: number = 1;
  s = 5;
  constructor(private service: ClientService) { }

  ngOnInit() {
    this.service.getAllClients().subscribe(result => {
      this.clientList = result ;
    });
  }

}
