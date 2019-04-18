import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitsState } from '../reducers/units.reducer';

export const getUnitsState = createFeatureSelector<UnitsState>(
  'units'
);

export const getUnits = createSelector(
  getUnitsState,
  (state: any) => state.entities
);

