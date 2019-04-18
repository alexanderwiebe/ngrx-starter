import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUnits = createSelector(
  (state: any) => state.units.entities
);

