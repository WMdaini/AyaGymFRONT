import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  ajouterCategory(data) {
    return this.http.post(environment.baseUrl + '/category/ajouter' , data);
  }

  getCategoryById(idCategory) {
    return this.http.get(environment.baseUrl + '/category/category/' + idCategory );
  }

  getAllCategorys() {
    return this.http.get(environment.baseUrl + '/category/category');
  }

  deleteCategory(idCategory) {
    return this.http.delete(environment.baseUrl + '/category/delete/' + idCategory);
  }

  updateCategory(idCategory, data) {
    return this.http.put(environment.baseUrl + '/category/update/' + idCategory, data);
  }

  setCategoryStatus(idCategory, data) {
    return this.http.put(environment.baseUrl + '/category/setStatus' + idCategory, data);
  }
}
