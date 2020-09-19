"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnigmaModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("./core");
let EnigmaModule = class EnigmaModule {
};
EnigmaModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [new core_1.EnvironmentService().init]
            })
        ],
        providers: [
            core_1.EnvironmentService,
            core_1.PostgresConfigService,
            core_1.SwaggerConfigService
        ],
        exports: [
            core_1.EnvironmentService,
            core_1.PostgresConfigService,
            core_1.SwaggerConfigService
        ],
    })
], EnigmaModule);
exports.EnigmaModule = EnigmaModule;
//# sourceMappingURL=EnigmaModule.js.map