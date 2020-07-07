import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  public host: String = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public getAll(page: number, size: number) {
    return this.httpClient.get(this.host + "/produits?page=" + page + "&size=" + size);
  }

}
