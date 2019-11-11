import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  clientList: any = [{}] ;
  p: number = 1;
  s = 5;
  filtredCategory: string;
  filtredStatus: string ;
  filtredGender: string ;
  filredStartDate: Date;
  filtredEndDate: Date;
  constructor(private service: ClientService) { }

  ngOnInit() {
   this.getAllClients();
  }
  getAllClients() {
    this.service.getAllClients().subscribe(result => {
      this.clientList = result ;
    });
  }
  filters() {
    console.log(this.filredStartDate);
    this.service.getFiltredClients(this.filtredStatus, this.filtredGender).subscribe(res => {
      console.log(res);
      this.clientList = res;
    });
  }



}
