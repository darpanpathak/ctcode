import { item } from '../../classes/item.class';
import { AppServiceService } from './../../services/app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: item[];
  emptycartmsg : boolean = true;
  discount =5;
  totalprice = 0;
  totalpriceafterdiscount = 0;
  selectedQty;


  constructor(public _appService: AppServiceService) { }

  ngOnInit() {
    this._appService.getAllCartItems().subscribe(result => {
      if (result) {
        this.cartItems = result;
        this.doPorcessTotal(result);
      }
      else {
        this.cartItems = [];
        this.emptycartmsg = false;
      }
    });
  }

  getArrayofNumber(num) {
      return Array(num).fill(0).map((x, i) => i+1)
  }

  doQtyChange(data, event)
  {
    this._appService.updateCart(data, this.getArrayofNumber(data.initialStock)[event.target.selectedIndex]).subscribe(result =>{
      this.cartItems = result;
      this.doPorcessTotal(result);
    });
  }

  doPorcessTotal(data : item[]){
    debugger;
    let total = 0;
    for(let i=0; i <data.length; i++){
        total += (Number(data[i].qty) * Number(data[i].price));
    }

    this.totalprice = total;
    this.totalpriceafterdiscount = total - (total * 5/100);


  }

  doDelete(data){
    this._appService.doDelete(data).subscribe(result =>{
      this.cartItems = result;
      this.doPorcessTotal(result);
    });
  }

}
