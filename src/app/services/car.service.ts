import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcardetail';
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getbybrandid?brandId='+brandId;
   
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
   
  }
  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getbycolorid?colorId='+colorId;
    
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandIdAndColorId(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcarsbybrandidandcolorid?brandId='+brandId+'&colorId='+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+'cars/getbycarid?carId='+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}
