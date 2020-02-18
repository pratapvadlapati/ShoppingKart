import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _dataservice: DataService,
              private _router: Router) { }

  private Products:any;

  addToCart(product){
   //console.log(product)
   let  item = {
                "id": product._id,
                "name": product.name,
                "price": product.price,
                "imagePath": product.imagePath,
                "qty": '1'
                      }
  
  this._dataservice.addItemToCart(item)
  .subscribe(res => {
   
    return res;
    
  })
  this._router.navigate(['cart'])
  }

  ngOnInit() {
    this._dataservice.getProducts()
    .subscribe(products=> {
      this.Products = products;
    })
  }

}
