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
  apiUrl: string = 'https://localhost:44373/api/colors/';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  getColorId(colorId:number):Observable<SingleResponseModel<Color>>{
    let newPath=this.apiUrl+'getbyid?colorId='+colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }
}
