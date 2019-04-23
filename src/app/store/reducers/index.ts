import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { reducer } from './units.reducer';
import { UnitsState } from './units.reducer';

export interface AppState {
  units: UnitsState;
}

export const reducers: ActionReducerMap<AppState> = {
  units: reducer,
};
