import { INestApplication, Injectable } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { SwaggerConfig } from "..";

@Injectable()
export class SwaggerConfigService {
    constructor() { }

    addSwagger(app: INestApplication, config: SwaggerConfig): void {
        const options = new DocumentBuilder()
            .setTitle(config.title)
            .setDescription(config.description)
            .setVersion(config.version)
            .build();
        const docs = SwaggerModule.createDocument(app, options);
        SwaggerModule.setup(config.route, app, docs);
    }
}


// export const addSwagger = (app: INestApplication, config: SwaggerConfig) => {
//     const options = new DocumentBuilder()
//         .setTitle(config.title)
//         .setDescription(config.description)
//         .setVersion(config.version)
//         .build();
//     const docs = SwaggerModule.createDocument(app, options);
//     SwaggerModule.setup(config.route, app, docs);
// }