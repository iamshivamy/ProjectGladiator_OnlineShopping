import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
  productArray:any;
  srchkeyword:string="";
  wish:any;
  cart:any;
  constructor(private prodservice:ProductService,private userservice:UserService) { }

  ngOnInit(): void {

  }

  searchByName()
  {
    console.log("Srch String "+this.srchkeyword);
      this.prodservice.searchProduct(this.srchkeyword).subscribe
      (
        (data)=>{
          console.log(data);
            this.productArray=data;
        },
        (error)=>
        {
          console.log(error);
        }
      )

    
  }

  lowtohigh_()
  {
      this.prodservice.lowtohighfilter_(this.srchkeyword).subscribe
      (
        (data)=>{
          console.log(data);
            this.productArray=data;
        },
        (error: any)=>
        {
          console.log(error);
        }
      )

  }

  hightolow_()
  {
      this.prodservice.hightolowfilter_(this.srchkeyword).subscribe
      (
        (data)=>{
          console.log(data);
            this.productArray=data;
        },
        (error: any)=>
        {
          console.log(error);
        }
      )

  }

   // productid:any
 AddWish(productid:number)
 {
    this.wish=localStorage.getItem("wishlistid")
    console.log(localStorage.getItem("wishlistid"));
    this.userservice.addToWishList(this.wish,productid).subscribe
    (
      (data: any)=>{
            console.log(data);
            this.productArray=data;
            if(data==1)
            {
              console.log("added")
              alert("Product Added To Wishlist");
            }
      },
      (error: any)=>
      {
          console.log(error);
      }
    )
 }

 AddCart(productid:number)
 {
  this.cart=localStorage.getItem("cartid")
  console.log(localStorage.getItem("cartid"));
  this.userservice.addToCartList(this.cart,productid).subscribe
  (
    (data: any)=>{
          console.log(data);
          this.productArray=data;
          if(data==1)
          {
            console.log("added"+productid);
            alert("Product Added To Cart");
          }
    },
    (error: any)=>
    {
        console.log(error);
    }
  )
 }

}
