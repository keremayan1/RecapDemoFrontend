import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColors: Color;
  colorFilter:'';
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      console.log(response);
    });
  }
  getCurrentColorClass(color: Color) {
    if (color == this.currentColors) {
      return 'list-group-item list-group-item-success';
    } else {
      return 'list-group-item';
    }
  }
  setCurrentColorName(color: Color) {
    this.currentColors = color;
  }
}
