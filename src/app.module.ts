import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
    TypeOrmModule.forRoot(
      dataSourceOptions
    ),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
