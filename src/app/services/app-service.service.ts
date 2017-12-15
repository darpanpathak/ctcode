import { item } from './../classes/item.class';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AppServiceService {
  public ecomdata: item[] = [{
    id: 1,
    title: "Seven Rocks Men's V-Neck Cotton Tshirt V-Neck Tshirt Wine Melange",
    size: "L",
    seller: "Seven Rocks",
    initialStock: 10,
    price: 399,
    imageUrl: "http://img.michaels.com/L6/3/IOGLO/873480049/212543230/10093625_r.jpg?fit=inside|1024:1024",
    qty: 1
  }, {
    id: 2,
    title: "Dennis Lingo Men's Solid Casual Full Sleeves Slim fit Black Cotton Shirt",
    size: "XL",
    seller: "Jhon Players",
    initialStock: 15,
    price: 599,
    imageUrl: "http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwd6318fa5/images/hi-res/52921_AYNB.jpg?sw=750&sh=750&sm=fit&sfrm=png",
    qty: 1
  }, {
    id: 3,
    title: "United Colors of Benetton Men's Skinny Fit Jeans",
    size: "L",
    seller: "Lee",
    initialStock: 10,
    price: 999,
    imageUrl: "http://lp.hm.com/hmprod?set=key[source],value[/model/2017/F00%200540395%20003%2055%200887.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[1]&set=key[quality],value[80]&set=key[size],value[346x405]&call=url[file:/mobile/v2/product]",
    qty: 1,
  }, {
    id: 4,
    title: "Flying Machine Men's Jackson Skinny Jeans",
    size: "S",
    seller: "Flying Machine",
    initialStock: 11,
    price: 1399,
    imageUrl: "https://dtpmhvbsmffsz.cloudfront.net/posts/2014/06/11/5398dbc22d249047af3bf466/m_5398dbca2d249047af3bf480.jpg",
    qty: 1
  },];

  constructor() { }

  getAllItems(): Observable<item[]> {
    return Observable.of(this.ecomdata);
  }

  addTocart(data: item): Object {
    try {
      debugger;

      let cartitems = localStorage.getItem("cartitems");
      if (cartitems) {
        let cit = JSON.parse(cartitems);
        cit.push(data);
        localStorage.setItem("cartitems", JSON.stringify(cit));
      }
      else {
        let newarr = [];
        newarr.push(data);
        localStorage.setItem("cartitems", JSON.stringify(newarr));
      }

      return { status: 200, message: "successfully added" };
    }
    catch (e) {
      return { status: 400, message: "Some error occured" + e };
    }
  }

  getAllCartItems(): Observable<item[]> {
    let list = localStorage.getItem("cartitems");
    if (list) {
      return Observable.of(JSON.parse(list));
    }
    else {
      return Observable.of([]);
    }
  }

  updateCart(data, qty) {
    let listdata = JSON.parse(localStorage.getItem("cartitems"));
    for(let i=0; i <listdata.length; i++){
      if(listdata[i].id ===data.id){
        listdata[i].qty = qty;

        break;
      }
    }

    localStorage.setItem("cartitems", JSON.stringify(listdata));
    return Observable.of(listdata);
  }

  doDelete(data){
    let listdata = JSON.parse(localStorage.getItem("cartitems"));
    listdata.splice(listdata.indexOf(data), 1);

    localStorage.setItem("cartitems", JSON.stringify(listdata));
    return Observable.of(listdata);
  }





}

