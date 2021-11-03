import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  //BU konu arastirilacak
  transform(value: Car[], carDetailFilter:string): Car[] {
    carDetailFilter=carDetailFilter?carDetailFilter.toLocaleLowerCase():"";
   return carDetailFilter?value.filter((d:Car)=>(
    d.brandName.toLocaleLowerCase().indexOf(carDetailFilter)!==-1 || 
    d.colorName.toLocaleLowerCase().indexOf(carDetailFilter)!==-1)||
    d.modelYear.toString().indexOf(carDetailFilter)!==-1 ||
    d.dailyPrice.toString().indexOf(carDetailFilter)!==-1 ||
    d.description.toLocaleLowerCase().indexOf(carDetailFilter)!==-1):value;
  
  }

}
