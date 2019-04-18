import { Action } from '@ngrx/store';

export enum UnitsActionTypes {
  LoadUnits = '[Units] Load',
  LoadUnitsSuccess = '[Units] Load Success',
  LoadUnitsFail = '[Units] Load Fail'
}

export class LoadUnits implements Action {
  readonly type = UnitsActionTypes.LoadUnits;
}

export class LoadUnitsSuccess implements Action {
  readonly type = UnitsActionTypes.LoadUnitsSuccess;
  constructor(public payload: any) {}
}

export class LoadUnitsFail implements Action {
  readonly type = UnitsActionTypes.LoadUnitsFail;
  constructor(public payload: any) {}
}

export type UnitsActions = LoadUnits
| LoadUnitsSuccess
| LoadUnitsFail;