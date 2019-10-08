import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './ShowProduct';
import { Cart } from './CartModel';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModelProduct = this.fb.group({
    ProductName: ['', Validators.required],
    ProductPrice: [''],
    ProductImage: [''],
    ProductDiscount: [''],
    ProductDescription: [''],
    ProductStock: [''],
    Category_ID: ['']
  });

  formModelCart = this.fb.group({
    userID: [''],
    ProductID: [''],
    Quantity: ['']
  });

  public getCategory() {
    return this.http.get('https://localhost:5001/api/categories');
  }

  public Loadproducts()
  {
    var body= {
      ProductName: this.formModelProduct.value.ProductName,
      ProductPrice: this.formModelProduct.value.ProductPrice,
      ProductImage: this.formModelProduct.value.ProductImage,
      ProductDiscount: this.formModelProduct.value.ProductDiscount,
      ProductDescription: this.formModelProduct.value.ProductDescription,
      ProductStock: this.formModelProduct.value.ProductStock,
      Category_ID: this.formModelProduct.value.Category_ID
    };

    return this.http.post('https://localhost:5001/api/product', body);
  }

  public getProducts()
  {
    return this.http.get('https://localhost:5001/api/product');
  }

  public getproductsById(id: number)
  {
    return this.http.get('https://localhost:5001/api/product/' + id);
  }

  public updateProducts(id: number, body: Product)
  {
    return this.http.put('https://localhost:5001/api/product/' + id , body );
  }

  public deleteProductFromDb(productId: any) {
    return this.http.delete('https://localhost:5001/api/product/' + productId);
  }

  public CartAdd(model: Cart)
  {
    return this.http.post('https://localhost:5001/api/Cart/addToCart', model);
  }

  public getCart(model: Cart)
  {
    return this.http.post('https://localhost:5001/api/Cart/getCart', model);
  }

  public cartRemove(model: Cart)
  {
    return this.http.post('https://localhost:5001/api/Cart/removeFromCart', model);

  }

  public cartClear(model: Cart)
  {
    return this.http.post('https://localhost:5001/api/Cart/clearCart', model);
  }

  public getTotal(model: Cart)
  {
    return this.http.post('https://localhost:5001/api/Cart/getTotal', model);
  }

  public updateCart(uid: number) {
    return this.http.delete('https://localhost:5001/api/Cart/' + uid);
  }
}
