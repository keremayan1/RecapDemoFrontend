import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44373/api/Rentals/';
  constructor(private httpClient: HttpClient) {}
  getAllByRental(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}