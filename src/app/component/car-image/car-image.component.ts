import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[] = [];
 cars: Car; 
  imageUrl = 'https://localhost:44373';
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
        this.getCarByCarId(params['carId']);
      }
    });
  }
  getCarImagesByCarId(carId: number) {
    this.carImageService
      .getCarImageByCarId(carId)
      .subscribe((response) => (this.carImages = response.data));
  }
  getCarByCarId(carId: number) {
    this.carService
      .getCarByCarId(carId)
      .subscribe((response) => (this.cars = response.data[0]));
      console.log(carId);
  }
  getImagePath(image: string) {
    return this.imageUrl + image;
  }
}
