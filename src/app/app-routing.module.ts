import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './component/car-detail/car-detail.component';
import { CarComponent } from './component/car/car.component';

const routes: Routes = [
  {path:"",component:CarDetailComponent},
  {path:"cardetails",component:CarDetailComponent},
  {path:"cardetails/brand/:brandId",component:CarDetailComponent},
  {path:"cardetails/color/:colorId",component:CarDetailComponent},
  {path:"cardetails/brand/:brandId/color/:colorId",component:CarDetailComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
