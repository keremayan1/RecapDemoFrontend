import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  brands: Brand[];
  colors: Color[];
  dataLoaded = false;
  brandFilter: number = 0;
  colorFilter: number = 0;
  imageUrl = 'https://localhost:44373/';
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllColors();
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandId"]&&["colorId"]) {
        this.getCarsByBrandIdAndColorId(params["brandId"],params["colorId"]);
      }
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      }
      if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }
  getCars() {
    this.carService
      .getCars()
      .subscribe((response) => (this.cars = response.data));
 
  }
  getCarsByBrandId(brandId: number) {
   
    this.carService
      .getCarsByBrandId(brandId)
      .subscribe((response) => (this.cars = response.data));
  }
  getCarsByColorId(colorId: number) {
   
    this.carService
      .getCarsByColorId(colorId)
      .subscribe((response) => (this.cars = response.data));
  }
  getCarsByBrandIdAndColorId(brandId: number, colorId: number) {
    this.carService
      .getCarsByBrandIdAndColorId(brandId, colorId)
      .subscribe((response) => (this.cars = response.data));
  }
  getSelectedBrand(brandId: number) {
 
    if (this.brandFilter == brandId) return true;
    
    else return false;
  }
  getSelectedColor(colorId: number) {
    
    if (this.colorFilter == colorId) return true;
    else return false;
    
  }
  getAllBrands() {
    this.brandService
      .getBrands()
      .subscribe((response) => (this.brands = response.data));
  }
  getAllColors() {
    this.colorService
      .getColors()
      .subscribe((response) => (this.colors = response.data));
  }
}
