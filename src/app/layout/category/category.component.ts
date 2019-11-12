import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
listCategory: any = [{}];
  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.getAllCategorys();
  }

  getAllCategorys() {
    this.service.getAllCategorys().subscribe(res => {
      this.listCategory = res;
      console.log(res);
    });
  }

}
