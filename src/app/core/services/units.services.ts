import { Injectable } from '@angular/core';
import { Observable, throwError, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Unit } from '../models/units.model';

@Injectable({ providedIn: 'root' })
export class UnitsService {
  constructor() {}

  getUnits(): Observable<Unit[]> {
    return of([
      <Unit>{
        id:'1',
        name:'meter',
        abbreviation:'m'
      },<Unit>{
        id:'2',
        name:'second',
        abbreviation:'s'
      }
    ]);
  }
}