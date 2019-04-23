import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitsState, UnitsYearState, adapter } from '../reducers/units.reducer';
import { AppState } from '../reducers';
import { Unit } from '../../core/models';

export const getUnitsState = createFeatureSelector<UnitsYearState>('units');

export const getUnitsFromRoot = (state: AppState) => {
  return state.units;
};

// export const getCurrentUnits = createSelector(
//   getUnitsState,
//   (state: UnitsYearState, props): EntityState<Unit> => {
//     return state.years[state.currentYearId];
//   }
// );

export const getCurrentUnitsFromRoot = (state: AppState) => {
  return state.units.years[state.units.currentYearId];
};

export const {
  selectIds: getUnitIds,
  selectEntities: getUnitEntities,
  selectAll: getAllUnits,
  selectTotal: getTotalUnits
} = adapter.getSelectors(getCurrentUnitsFromRoot);

// export const getUnits = createSelector(
//   getUnitsState,
//   (state: any) => state.entities
// );

// export const getUnitsFromRoot = (state: AppState) => {
//   return state.units.entities;
// };

export const getUnits = createSelector(
  getUnitsState,
  (state: any, props) => {
    return state[props.yearId].entities;
  }
);

// export const getUnitsFromRoot = (state: AppState) => {
//   return state.units.entities;
// };
