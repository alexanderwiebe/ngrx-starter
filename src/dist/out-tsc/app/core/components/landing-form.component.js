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
var LandingFormComponent = (function () {
    function LandingFormComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LandingFormComponent.prototype, "units");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LandingFormComponent.prototype, "rootUnits");
    LandingFormComponent = __decorate([
        core_1.Component({
            selector: "landing-form",
            template: "\n    <h1>Landing Page</h1>\n    <ul>\n      <li *ngFor=\"let unit of units\">{{ unit.name }}</li>\n    </ul>\n    <ul>\n      <li *ngFor=\"let unit of rootUnits\">{{ unit.name }}</li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], LandingFormComponent);
    return LandingFormComponent;
})();
exports.LandingFormComponent = LandingFormComponent;
//# sourceMappingURL=landing-form.component.js.map