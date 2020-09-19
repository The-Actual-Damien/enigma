import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentService, PostgresConfigService, SwaggerConfigService } from './core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [new EnvironmentService().init]
    })
  ],
  providers: [
    EnvironmentService,
    PostgresConfigService,
    SwaggerConfigService
  ],
  exports: [
    EnvironmentService,
    PostgresConfigService,
    SwaggerConfigService
  ],
})
export class EnigmaModule { }
