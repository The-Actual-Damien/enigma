import { INestApplication } from "@nestjs/common";
import { SwaggerConfig } from "..";
export declare class SwaggerConfigService {
    constructor();
    addSwagger(app: INestApplication, config: SwaggerConfig): void;
}
