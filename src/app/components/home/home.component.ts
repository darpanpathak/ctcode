import { item } from '../../classes/item.class';
import { AppServiceService } from './../../services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemList: item[];

  constructor(public _appService: AppServiceService, public router : Router) { }

  ngOnInit() {

    this._appService.getAllItems().subscribe(result => {
      this.itemList = result;
    }, err => {
      console.log(err);
    });
  }

  doAddToCart(data: item) {
    debugger;
    let response = this._appService.addTocart(data);
    if (response["status"] == 200) {
      alert(response["message"]);
      this.router.navigate(["/app/cart"]);
    }
    else {
      alert(response["message"]);
    }
  }

}
