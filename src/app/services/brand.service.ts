import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';

import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}
  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'brands/getall';
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getByBrandId(brandId: number): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl + 'brands/getbyid?brandId=' + brandId;
    console.log(newPath);
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }
}
