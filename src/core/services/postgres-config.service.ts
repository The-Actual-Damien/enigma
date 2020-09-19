import { join } from 'path';
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { PostgresEnvironment } from "..";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly config: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        const paths = __dirname.split('/');
        const lastPortionOfPath = paths[paths.length - 1];

        const env = this.config.get('postgres') as PostgresEnvironment;
        return {
            type: 'postgres',
            host: env.host,
            port: env.port,
            username: env.user,
            password: env.pass,
            database: env.db,
            entities: [join(process.cwd(), lastPortionOfPath, '**/*.entity{.ts,.js}')]
        }
    }
}