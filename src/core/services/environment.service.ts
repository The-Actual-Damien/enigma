import { Injectable } from '@nestjs/common'
import { Environment } from '..'

@Injectable()
export class EnvironmentService {
    constructor() { }

    init(): Environment {
        const currentEnvironment = process.env.NODE_ENV || 'development';
        const protectedEnvironments = process.env.PROTECTED_ENVIRONMENTS || 'production';
        const synchronizeDb = process.env.DB_SYNC === 'true' && protectedEnvironments.indexOf(currentEnvironment) === -1;
        return {
            env: currentEnvironment,
            port: parseInt(process.env.PORT, 10) || 3000,
            token: process.env.TOKEN,
            postgres: {
                host: process.env.PG_HOST,
                port: parseInt(process.env.PG_PORT, 10) || 5432,
                user: process.env.PG_USER,
                pass: process.env.PG_PASS,
                db: process.env.PG_DB,
                synchronize: synchronizeDb
            }
        }
    }
}
