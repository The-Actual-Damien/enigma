import { join } from 'path';
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { PostgresEnvironment } from "..";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly config: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        const pgEnv = this.config.get('postgres') as PostgresEnvironment;
        return {
            type: 'postgres',
            host: pgEnv.host,
            port: pgEnv.port,
            username: pgEnv.user,
            password: pgEnv.pass,
            database: pgEnv.db,
            synchronize: pgEnv.synchronize,
            entities: [join(process.cwd(), '**/*.entity.js')]
        }
    }
}