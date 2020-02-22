import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [LoaderComponent, CarouselComponent],
  exports: [LoaderComponent, CarouselComponent]
})
export class SharedModule {}
