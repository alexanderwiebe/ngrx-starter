var store_1 = require("@ngrx/store");
exports.getUnitsState = store_1.createFeatureSelector("units");
exports.getUnits = store_1.createSelector(exports.getUnitsState, function (state) { return state.entities; });
exports.getUnitsFromRoot = function (state) { return state.units.entities; };
//# sourceMappingURL=units.selector.js.map