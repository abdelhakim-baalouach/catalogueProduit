import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private host = 'http://localhost:8080/produits';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public getProducts(){
    return this.http.get(this.host );
  }

  // tslint:disable-next-line:typedef
  public save(product){
      return this.http.post<any>(this.host , product);
  }

  // tslint:disable-next-line:typedef
  public delete(product) {
    return this.http.delete(this.host , product);
  }

  // tslint:disable-next-line:typedef
  public update(product) {
    return this.http.put(this.host, product);
  }

}
