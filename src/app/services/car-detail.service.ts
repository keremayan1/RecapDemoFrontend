import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}
  getCarDetail(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetail';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailByBrandId(
    brandId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailByColorId(
    colorId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailByBrandIdAndColorId(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath =
      this.apiUrl +
      'cars/getcardetailbybrandidandcolorid?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailByMinPriceAndMaxPrice(
    minPrice: number,
    maxPrice: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath =
      this.apiUrl +
      'cars/getcardetailbyminpriceandmaxprice?minPrice=' +
      minPrice +
      '&maxPrice=' +
      maxPrice;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
