import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitsState, UnitsYearState, adapter } from '../reducers/units.reducer';
import { AppState } from '../reducers';

export const getUnitsState = createFeatureSelector<UnitsYearState>('units');

// export const {
//   selectIds: getUnitIds,
//   selectEntities: getUnitEntities,
//   selectAll: getAllUnits,
//   selectTotal: getTotalUnits
// } = adapter.getSelectors(UnitsState);

// export const getUnits = createSelector(
//   getUnitsState,
//   (state: any) => state.entities
// );

// export const getUnitsFromRoot = (state: AppState) => {
//   return state.units.entities;
// };

export const getUnits = createSelector(
  getUnitsState,
  (state: any, props) => state[props.yearId].entities
);

// export const getUnitsFromRoot = (state: AppState) => {
//   return state.units.entities;
// };
