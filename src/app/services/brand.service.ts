import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
<<<<<<< HEAD
  apiUrl: string = 'https://localhost:44373/api/brands/';
  constructor(private httpClient: HttpClient) {}
  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'getall';
    console.log(newPath);
=======
 apiUrl:string="https://localhost:44373/api/brands/"
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath =this.apiUrl+"getall"
>>>>>>> 9b2c011fc7082c95c63a90cc4a071ff45f2ccb72
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  getByBrandId(brandId: number): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl + 'getbyid?brandId=' + brandId;
    console.log(newPath);
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }
}
