import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {DynamicScriptLoaderService} from '../../services/dynamic-script-loader.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  clientList: any = [{}] ;
  categoryList: any = [{}] ;
  p: number = 1;
  s = 5;
  filtredCategory = {} ;
  filtredStatus: string ;
  filtredGender: string ;
  filredStartDate: Date;
  filtredEndDate: Date;
  constructor(private service: ClientService, private dynamicScriptLoader: DynamicScriptLoaderService, private categoryService: CategoryService) { }

    ngOnInit() {
        this.getAllCategorys();
        this.getAllClients();
        this.loadScripts();
    }

    getAllCategorys() {
      this.categoryService.getAllCategorys().subscribe(res => {
        this.categoryList = res;
      });
    }
    getAllClients() {
        this.service.getAllClients().subscribe(result => {
            this.clientList = result;
            console.log(result);
        });
    }

    filters() {
      if ( this.filtredCategory === 'all') {
        this.filtredCategory = {} ;
      }
        this.service.getFiltredClients(this.filtredStatus, this.filtredGender, this.filtredCategory).subscribe(res => {
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
