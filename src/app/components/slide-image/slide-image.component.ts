import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slide-image',
  templateUrl: './slide-image.component.html',
  styleUrls: ['./slide-image.component.scss'],
})
export class SlideImageComponent {
  
  constructor() { }

  slideOpts={
    loop:true
  };

  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }
}
