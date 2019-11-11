import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients() {
    return this.http.get(environment.baseUrl + '/client/list-clients');
  }

  getFiltredClients(status) {
    return this.http.get(environment.baseUrl + '/client/clients-filter/' + status );
  }
}

