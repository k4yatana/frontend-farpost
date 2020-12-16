import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadsRoutingModule } from './roads-routing.module';
import { LongestComponent } from './presentation/components/longest/longest.component';
import { LongestService } from './infrastructure/longest.service';
import { ShareModule } from '../share/share.module';



@NgModule({
  providers: [
    LongestService,
  ],
  declarations: [LongestComponent],
  imports: [
    CommonModule,
    RoadsRoutingModule,
    ShareModule,
  ]
})
export class RoadsModule { }
