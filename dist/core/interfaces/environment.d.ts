import { PostgresEnvironment } from "./postgres-environment";
export interface Environment {
    env: string;
    port: number;
    token: string;
    postgres: PostgresEnvironment;
}
