"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentService = void 0;
const common_1 = require("@nestjs/common");
let EnvironmentService = class EnvironmentService {
    constructor() { }
    init() {
        return {
            env: process.env.NODE_ENV || 'development',
            port: parseInt(process.env.PORT, 10) || 3000,
            token: process.env.TOKEN,
            postgres: {
                host: process.env.PG_HOST,
                port: parseInt(process.env.PG_PORT, 10) || 5432,
                user: process.env.PG_USER,
                pass: process.env.PG_PASS,
                db: process.env.PG_DB
            }
        };
    }
};
EnvironmentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], EnvironmentService);
exports.EnvironmentService = EnvironmentService;
//# sourceMappingURL=environment.service.js.map