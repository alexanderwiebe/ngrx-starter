import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Dictionary,
} from '@ngrx/entity';
import { UnitsActions, UnitsActionTypes } from '../actions';
import { Unit } from '../../core/models/units.model';

export const adapter: EntityAdapter<Unit> = createEntityAdapter<Unit>();

export interface UnitsState extends EntityState<Unit> {
  loaded: boolean;
  loading: boolean;
}

export interface UnitsYearState {
  [id: string]: UnitsState;
}

export const initialUnitState: UnitsState = adapter.getInitialState({
  loaded: false,
  loading: false,
});

export const initialState: UnitsYearState = {};

export function reducer(
  state = initialState,
  action: UnitsActions
): UnitsYearState {
  switch (action.type) {
    case UnitsActionTypes.LoadUnits: {
      return {
        ...state,
        [action.payload.yearId]: { ...initialUnitState, loading: true },
      };
    }

    case UnitsActionTypes.LoadUnitsSuccess: {
      const entities = action.payload.entities;

      return {
        ...state,
        [action.payload.yearId]: adapter.upsertMany(entities, {
          ...state[action.payload.yearId],
          loading: false,
          loaded: true,
        }),
      };
    }

    case UnitsActionTypes.LoadUnitsFail: {
      return {
        ...state,
        [action.payload.yearId]: {
          ...state[action.payload.yearId],
          loading: false,
          loaded: false,
        },
      };
    }
    default:
      return state;
  }
}
