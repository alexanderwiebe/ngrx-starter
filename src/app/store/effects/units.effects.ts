import { LoadUnits } from './../actions/units.actions';
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
    protected unitsService: UnitsService
  ) {}

  @Effect()
  loadUnits$ = this.actions$.pipe(
    ofType(UnitsActionTypes.LoadUnits),
    map((action: LoadUnits) => action.payload),
    switchMap(payload => {
      return this.unitsService.getUnits(payload.yearId).pipe(
        map(
          entities =>
            new LoadUnitsSuccess({
              yearId: payload.yearId,
              entities,
            })
        ),
        catchError(error =>
          of(new LoadUnitsFail({ yearId: payload.yearId, error }))
        )
      );
    })
  );
}
