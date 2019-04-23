import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { reducer, UnitsYearState } from './units.reducer';
import { UnitsState } from './units.reducer';

export interface AppState {
  units: UnitsYearState;
}

export const reducers: ActionReducerMap<AppState> = {
  units: reducer
};
