import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UnitsState } from "../reducers/units.reducer";
import { AppState } from "../reducers";

export const getUnitsState = createFeatureSelector<UnitsState>("units");

export const getUnits = createSelector(
  getUnitsState,
  (state: any) => state.entities
);

export const getUnitsFromRoot = (state: AppState) => {
  return state.units.entities;
};
