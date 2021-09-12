import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[]=[];
  currentBrand: Brand;
  

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      console.log(response);
    });
  }
 
  setCurrentBrand(brand: Brand) {
    if(this.currentBrand = brand) return true;
    else return false;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item list-group-item-success';
    } else {
      return 'list-group-item';
    }
  }


  getAllBrandClass() {
    if (!this.currentBrand) {
      return 'list-group-item list-group-item-success';
    } else {
      return 'list-group-item';
    }
  }
}
