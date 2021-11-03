import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarImageComponent } from './component/car-image/car-image.component';

import { CarComponent } from './component/car/car.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"cardetails",component:CarComponent},
  {path:"cardetails/brand/:brandId",component:CarComponent},
  {path:"cardetails/color/:colorId",component:CarComponent},
  {path:"cardetails/brand/:brandId/color/:colorId",component:CarComponent} ,
  {path:"cardetails/cardetailimage/:carId",component:CarImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
