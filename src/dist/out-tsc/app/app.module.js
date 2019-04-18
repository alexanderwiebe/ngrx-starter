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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var store_1 = require('@ngrx/store');
var effects_1 = require('@ngrx/effects');
var store_devtools_1 = require('@ngrx/store-devtools');
var reducers_1 = require('./store/reducers');
var effects_2 = require('./store/effects');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var containers_1 = require('./core/containers');
var components_1 = require('./core/components');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                store_1.StoreModule.forRoot(reducers_1.reducers),
                effects_1.EffectsModule.forRoot(effects_2.effects),
                store_devtools_1.StoreDevtoolsModule.instrument(),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent, containers_1.LandingComponent, containers_1.NotLandingComponent, components_1.LandingFormComponent, components_1.NotLandingFormComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map