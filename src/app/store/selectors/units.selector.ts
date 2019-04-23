import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitsState, UnitsYearState, adapter } from '../reducers/units.reducer';
import { AppState } from '../reducers';

export const getUnitsState = createFeatureSelector<UnitsYearState>('units');

// export const getCurrentUnits = createSelector(
//   getUnitsState,
//   (state: UnitsYearState, props): UnitsState => {
//     return state[props.yearId];
//   }
// );

export const getUnitsFromRoot = (state: AppState) => {
  return state.units.entities;
};

export const {
  selectIds: getUnitIds,
  selectEntities: getUnitEntities,
  selectAll: getAllUnits,
  selectTotal: getTotalUnits
} = adapter.getSelectors(getCurrentUnits);

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
