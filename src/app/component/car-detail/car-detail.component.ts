import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/cardetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  constructor(
    private carDetailService: CarDetailService,
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCarBrands();
    this.getCarColors();

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarDetailByBrandIdAndColorId(
          params['brandId'],
          params['colorId']
        );
      } else if (params['brandId']) {
        this.getCarDetailByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailByColorId(params['colorId']);
      } else {
        this.getCarDetails();
      }
    });
  }
  getCarDetails() {
    this.carDetailService
      .getCarDetail()
      .subscribe((response) => (this.carDetails = response.data));
  }
  getCarDetailByBrandId(brandId: number) {
    this.carDetailService
      .getCarDetailByBrandId(brandId)
      .subscribe((response) => (this.carDetails = response.data));
  }
  getCarDetailByColorId(colorId: number) {
    this.carDetailService
      .getCarDetailByColorId(colorId)
      .subscribe((response) => (this.carDetails = response.data));
  }
  getCarDetailByBrandIdAndColorId(brandId: number, colorId: number) {
    this.carDetailService
      .getCarDetailByBrandIdAndColorId(brandId, colorId)
      .subscribe((response) => (this.carDetails = response.data));
  }
  getCarDetailByMinPriceAndMaxPrice(minPrice: number, maxPrice: number) {
    this.carDetailService
      .getCarDetailByMinPriceAndMaxPrice(minPrice, maxPrice)
      .subscribe((response) => (this.carDetails = response.data));
  }
  getCarBrands() {
    this.brandService
      .getBrands()
      .subscribe((response) => (this.brands = response.data));
  }
  getCarColors() {
    this.colorService
      .getColors()
      .subscribe((response) => (this.colors = response.data));
  }
}
