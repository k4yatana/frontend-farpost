import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LongestRoad } from '../domain/longest-road';

@Injectable()
export class LongestService {
  constructor(
    private readonly http: HttpClient,
  ) { }

  getAll(): Observable<LongestRoad[]> {
    return this.http.get<LongestRoad[]>(`${environment.baseUrl}/roads/longest`);
  }
}
