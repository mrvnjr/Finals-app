import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { SlideImageComponent } from "./slide-image.component";

@NgModule ({
    declarations: [SlideImageComponent],
    imports: [CommonModule, IonicModule],
    exports: [SlideImageComponent],
})
export class SlideImageModule {}


