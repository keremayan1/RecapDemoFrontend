import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  currentRentals:Rental;
  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getAllRentals();
  }
  getAllRentals() {
    this.rentalService
      .getAllByRental()
      .subscribe((response) => (this.rentals = response.data));
  }
}
