import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LongestRoad } from '../../../domain/longest-road';
import { LongestService } from '../../../infrastructure/longest.service';

@Component({
  selector: 'app-longest',
  templateUrl: './longest.component.html',
  styleUrls: ['./longest.component.scss']
})
export class LongestComponent {
  roads$: Observable<LongestRoad[]>;

  constructor(
    private readonly longestService: LongestService,
  ) {
    this.roads$ = this.longestService.getAll();
  }

  update(): void {
    this.roads$ = this.longestService.getAll();
  }
}
