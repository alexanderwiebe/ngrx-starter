(function (UnitsActionTypes) {
    UnitsActionTypes[UnitsActionTypes["LoadUnits"] = '[Units] Load'] = "LoadUnits";
    UnitsActionTypes[UnitsActionTypes["LoadUnitsSuccess"] = '[Units] Load Success'] = "LoadUnitsSuccess";
    UnitsActionTypes[UnitsActionTypes["LoadUnitsFail"] = '[Units] Load Fail'] = "LoadUnitsFail";
})(exports.UnitsActionTypes || (exports.UnitsActionTypes = {}));
var UnitsActionTypes = exports.UnitsActionTypes;
var LoadUnits = (function () {
    function LoadUnits() {
        this.readonly = type = UnitsActionTypes.LoadUnits;
    }
    return LoadUnits;
})();
exports.LoadUnits = LoadUnits;
var LoadUnitsSuccess = (function () {
    function LoadUnitsSuccess(payload) {
        this.payload = payload;
        this.readonly = type = UnitsActionTypes.LoadUnitsSuccess;
    }
    return LoadUnitsSuccess;
})();
exports.LoadUnitsSuccess = LoadUnitsSuccess;
var LoadUnitsFail = (function () {
    function LoadUnitsFail(payload) {
        this.payload = payload;
        this.readonly = type = UnitsActionTypes.LoadUnitsFail;
    }
    return LoadUnitsFail;
})();
exports.LoadUnitsFail = LoadUnitsFail;
//# sourceMappingURL=units.actions.js.map