import { Injectable } from '@nestjs/common'
import { Environment } from '..'

@Injectable()
export class EnvironmentService {
    constructor() { }

    init(): Environment {
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
        }
    }
}

// export const loadConfig = (): Environment => ({
//     env: process.env.NODE_ENV || 'development',
//     port: parseInt(process.env.PORT, 10) || 3000,
//     token: process.env.TOKEN,
//     postgres: {
//         host: process.env.PG_HOST,
//         port: parseInt(process.env.PG_PORT, 10) || 5432,
//         user: process.env.PG_USER,
//         pass: process.env.PG_PASS,
//         db: process.env.PG_DB
//     }
// })

