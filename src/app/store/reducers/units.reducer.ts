import { UnitsActions, UnitsActionTypes } from '../actions';
import { Unit } from '../../core/models/units.model';

export interface UnitsState {
  entities: Unit[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: UnitsState = {
  entities: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: UnitsActions
): UnitsState {
  switch (action.type) {
    case UnitsActionTypes.LoadUnits: {
      return {
        ...state,
        loading: true
      };
    }

    case UnitsActionTypes.LoadUnitsSuccess: {
      const entities = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case UnitsActionTypes.LoadUnitsFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    default:
      return state;
  }
}