var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var effects_1 = require('@ngrx/effects');
var actions_1 = require('../actions');
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
var UnitsEffects = (function () {
    function UnitsEffects(actions$, unitsService) {
        var _this = this;
        this.actions$ = actions$;
        this.unitsService = unitsService;
        this.loadUnits$ = this.actions$.pipe(effects_1.ofType(actions_1.UnitsActionTypes.LoadUnits), operators_1.switchMap(function () {
            return _this.unitsService.getUnits().pipe(operators_1.map(function (units) { return new actions_1.LoadUnitsSuccess(units); }), operators_1.catchError(function (error) { return rxjs_1.of(new actions_1.LoadUnitsFail(error)); }));
        }));
    }
    __decorate([
        effects_1.Effect(), 
        __metadata('design:type', Object)
    ], UnitsEffects.prototype, "loadUnits$");
    UnitsEffects = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof Actions !== 'undefined' && Actions) || Object, (typeof UnitsService !== 'undefined' && UnitsService) || Object])
    ], UnitsEffects);
    return UnitsEffects;
})();
exports.UnitsEffects = UnitsEffects;
//# sourceMappingURL=units.effects.js.map