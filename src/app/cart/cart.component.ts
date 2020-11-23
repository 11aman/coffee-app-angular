import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  quantity=0;
  i=0

  plus(){
    if(this.i !==5000){
      this.i++;
      this.quantity=this.i;
    }
  }

  minus(){
    if(this.i !==0){
      this.i--;
      this.quantity=this.i;
    }
  }

  quantity1=0;

  a=0

  plus1(){
    if(this.a !==5000){
      this.a++;
      this.quantity1=this.a;
    }
  }

  minus1(){
    if(this.a !==0){
      this.a--;
      this.quantity1=this.a;
    }
  }

  ngOnInit(): void {
  }



}
