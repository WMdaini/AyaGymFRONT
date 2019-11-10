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
  filtredCategory: string = 'Category';
  filtredStatus: string = 'Client status';
  filtredGender: string = 'Sexe';
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
    this.service.getFiltredClients(this.filtredStatus).subscribe(res => {
      console.log(res);
      this.clientList = res;
    });
  }



}
