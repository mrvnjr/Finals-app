import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mealplan } from 'src/app/mealplan/mealplan.model';
import { PlandaysService } from '../plandays.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  day: string;
  mealplan: Mealplan;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PlandaysService: PlandaysService,
    ) { 
    this.day = this.activatedRoute.snapshot.paramMap.get('day');
  }

  ngOnInit() {
    this.mealplan = this.PlandaysService.getMealplans(this.day);
  }

}