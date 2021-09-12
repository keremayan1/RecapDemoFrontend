import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
<<<<<<< HEAD
  apiUrl: string = 'https://localhost:44373/api/colors/';
  constructor(private httpClient: HttpClient) {}
=======
 apiUrl:string="https://localhost:44373/api/colors/"
  constructor(private httpClient:HttpClient) { }
>>>>>>> 9b2c011fc7082c95c63a90cc4a071ff45f2ccb72

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  getColorId(colorId:number):Observable<SingleResponseModel<Color>>{
    let newPath=this.apiUrl+'getbyid?colorId='+colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }
}
