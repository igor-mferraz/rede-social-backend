import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { dataSourceOptions } from './db/data-source';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      dataSourceOptions
    ),
    UserModule,
    TweetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
