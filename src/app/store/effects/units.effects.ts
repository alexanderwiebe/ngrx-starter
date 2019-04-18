import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { UnitsActionTypes, LoadUnitsSuccess, LoadUnitsFail } from '../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UnitsService } from '../../core/services';


@Injectable()
export class UnitsEffects {
  constructor(
    protected actions$: Actions,
    protected unitsService: UnitsService,
  ) { }

  @Effect()
  loadUnits$ = this.actions$.pipe(
    ofType(UnitsActionTypes.LoadUnits),
    switchMap(() => {
      return this.unitsService.getUnits().pipe(
        map(units => new LoadUnitsSuccess(units)),
        catchError(error => of(new LoadUnitsFail(error)))
      );
    })
  );
}