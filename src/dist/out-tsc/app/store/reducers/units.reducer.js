var actions_1 = require('../actions');
exports.initialState = {
    entities: [],
    loaded: false,
    loading: false
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case actions_1.UnitsActionTypes.LoadUnits: {
            return {
                state: state,
                loading: true
            };
        }
        case actions_1.UnitsActionTypes.LoadUnitsSuccess: {
            var entities = action.payload;
            return {
                state: state,
                loading: false,
                loaded: true,
                entities: entities
            };
        }
        case actions_1.UnitsActionTypes.LoadUnitsFail: {
            return {
                state: state,
                loading: false,
                loaded: false
            };
        }
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=units.reducer.js.map