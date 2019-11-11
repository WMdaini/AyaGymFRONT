import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {DynamicScriptLoaderService} from '../../services/dynamic-script-loader.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
    clientList;
    p: number = 1;
    s = 5;
    filtredCategory: string = 'Category';
    filtredStatus: string = 'Client status';
    filtredGender: string = 'Sexe';
    filredStartDate: Date;
    filtredEndDate: Date;

    constructor(private service: ClientService, private dynamicScriptLoader: DynamicScriptLoaderService) {
    }

    ngOnInit() {
        this.getAllClients();
        this.loadScripts();
    }

    getAllClients() {
        this.service.getAllClients().subscribe(result => {
            this.clientList = result;
        });
    }

    filters() {
        console.log(this.filredStartDate);
        this.service.getFiltredClients(this.filtredStatus).subscribe(res => {
            console.log(res);
            this.clientList = res;
        });
    }


    private loadScripts() {
        // You can load multiple scripts by just providing the key as argument into load method of the service
        this.dynamicScriptLoader.load('datetimepicker').then(data => {
            // Script Loaded Successfully
        }).catch(error => console.log(error));
    }

}
