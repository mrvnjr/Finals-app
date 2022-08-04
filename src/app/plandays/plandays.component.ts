import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mealplan } from '../mealplan/mealplan.model';
@Component({
  selector: 'app-plandays',
  templateUrl: './plandays.component.html',
  styleUrls: ['./plandays.component.scss'],
})
export class PlandaysComponent {
  @Input() item: Mealplan;
  @Output() clicked = new EventEmitter();
}
