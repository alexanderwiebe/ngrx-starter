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
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var actions_1 = require("../../store/actions");
var units_selector_1 = require("../../store/selectors/units.selector");
var LandingComponent = (function () {
    function LandingComponent(store) {
        this.store = store;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new actions_1.LoadUnits());
        this.units$ = this.store.pipe(store_1.select(units_selector_1.getUnits));
        this.rootUnits$ = this.store.pipe(store_1.select(units_selector_1.getUnitsFromRoot));
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: "landing",
            template: "\n    <landing-form\n      [units]=\"units$ | async\"\n      [rootUnits]=\"rootUnits$ | async\"\n    ></landing-form>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof Store !== 'undefined' && Store) || Object])
    ], LandingComponent);
    return LandingComponent;
})();
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map