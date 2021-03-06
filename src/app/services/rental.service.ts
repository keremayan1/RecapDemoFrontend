import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl=environment.apiUrl;
  constructor(private httpClient: HttpClient) {}
  getAllByRental(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'Rentals/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
