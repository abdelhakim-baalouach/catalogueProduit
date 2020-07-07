import { Component, OnInit } from '@angular/core';
import {ProductsService} from './services/products.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IProduct} from './model/product.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any;
  addForm: FormGroup;
  editForm: FormGroup;
  private product: IProduct;
  private deleteProduct: IProduct;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private Services: ProductsService
  ) {
    const formControlsAdd = {
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    };

    const formControlsEdit = {
      editName: new FormControl('', [Validators.required]),
      editPrice: new FormControl('', [Validators.required]),
      editQuantity: new FormControl('', [Validators.required]),
    };
    this.addForm = this.fb.group(formControlsAdd);
    this.editForm = this.fb.group(formControlsEdit);
  }

  ngOnInit(): void {
    this.onGetProducts();
  }

  // tslint:disable-next-line:typedef
  onGetProducts(){
    this.Services.getProducts().subscribe(
      data => {
        this.products = data;
    }, (error) => {
        this.toastr.error(error);
    });
  }

  // tslint:disable-next-line:typedef
  save(): void{
    const data = this.addForm.value;
    this.product = {
      id: null,
      nameProduct: data.name,
      price: data.price,
      quantity: data.quantity
    };

    this.Services.save(this.product).subscribe(
      (res) => {
        this.toastr.success('addition with successfully.');
        location.reload();
      },
      (error) => {
        this.toastr.error(error);

      }
    );
  }

  // tslint:disable-next-line:typedef
  delete(product: any){
    this.deleteProduct = product;
  }

  // tslint:disable-next-line:typedef
  onDelete(){
    this.Services.delete(this.deleteProduct).subscribe(
      () => {
        this.toastr.success('deletion with successfully.');
        this.onGetProducts();
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  update(arg: any){
    this.product = arg;
    this.editForm.setValue({
      editName: this.product.nameProduct,
      editPrice: this.product.price,
      editQuantity: this.product.quantity,
    });
  }

  // tslint:disable-next-line:typedef
  onUpdate(){
    const data = this.editForm.value;
    this.product = {
      id: this.product.id,
      nameProduct: data.name,
      price: data.price,
      quantity: data.quantity
    };

    this.Services.update(this.product).subscribe(
      () => {
        this.toastr.success('update with successfully.');
        this.onGetProducts();
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }

}
