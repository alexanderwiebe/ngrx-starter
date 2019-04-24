import { Injectable } from '@angular/core';
import { Observable, throwError, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Unit } from '../models/units.model';

@Injectable({ providedIn: 'root' })
export class UnitsService {
  constructor() {}

  getUnits(yearId: string): Observable<Unit[]> {
    return of([
      <Unit>{
        id: '1',
        yearId: yearId,
        name: 'meter',
        abbreviation: 'm'
      },
      <Unit>{
        id: '2',
        yearId: yearId,
        name: 'second',
        abbreviation: 's'
      }
    ]);
  }
}
