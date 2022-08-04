import { Injectable } from "@angular/core";
import { Mealplan } from "../mealplan/mealplan.model";

@Injectable({
    providedIn: 'root',
})
export class PlandaysService {
    getMealplan(): Mealplan[] {
        return [
            {
              days:'day 1',
              name:'Monday',
              breakfast:'egg',
              lunch: 'egg',
              dinner: 'egg'
            },
            {
              days:'day 2',
              name:'Tuesday',
              breakfast:'egg',
              lunch: 'egg',
              dinner: 'egg'
            },
            {
              days:'day 3',
              name:'Wednesday',
              breakfast:'egg',
              lunch: 'egg',
              dinner: 'egg'
            },
            {
              days:'day 4',
              name:'Thursday',
              breakfast:'egg',
              lunch: 'egg',
              dinner: 'egg'
            },
            {
              days:'day 5',
              name:'Friday',
              breakfast:'egg',
              lunch: 'egg',
              dinner: 'egg'
            },
            {
              days:'day 6',
              name:'Saturday',
              breakfast:'egg',
              lunch: 'egg',
              dinner: 'egg'
            },
            {
              days:'day 7',
              name:'Sunday',
              breakfast:'egg',
              lunch: 'egg',
              dinner: 'egg'
            },       
       ];
    }
    getMealplans(days: string): Mealplan {
      return this.getMealplan().find((mealplan) => mealplan.days == days);
    }
}
