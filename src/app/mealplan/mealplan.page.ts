import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlandaysService } from '../plandays/plandays.service';
import { Mealplan } from './mealplan.model';

@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.page.html',
  styleUrls: ['./mealplan.page.scss'],
})
export class MealplanPage implements OnInit {
  mealplan: Mealplan[] = [];
  constructor(private PlandaysService: PlandaysService, private router: Router) { }

  ngOnInit() {
    this.mealplan = this.PlandaysService.getMealplan();
  }
  goToInfoPage(day:string){
    this.router.navigate(['info', day]);
  }

}
