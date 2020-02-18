import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService} from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cart :any

  constructor(private _http: HttpClient,
              private _dataservice: DataService) { 
    
  }

  getItems(){
    
  }

  ngOnInit() {
    this._dataservice.getCart()
    .subscribe(data=>{
    
    this.cart = data;
      console.log(this.cart.items)
    })
  }

}
