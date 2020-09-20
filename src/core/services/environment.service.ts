import { Injectable } from '@nestjs/common'
import { Environment } from '..'

@Injectable()
export class EnvironmentService {
    constructor(private protectedEnvironments: Array<String> = ['staging', 'production']) { }

    init(): Environment {
        const currentEnvironment = process.env.NODE_ENV || 'development';
        const synchronizeDb = !this.protectedEnvironments.includes(currentEnvironment) && process.env.DB_SYNC === 'true';
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
