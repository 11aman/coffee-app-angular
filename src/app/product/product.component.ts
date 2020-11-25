import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ids = [];
  constructor() { }

  ngOnInit(): void {
  }

  cart(id){
    console.log(id);
    this.ids.push(id);
  }

  productids(){
    localStorage.setItem('ids',this.ids.toString());
    console.log(this.ids);
  }

}
