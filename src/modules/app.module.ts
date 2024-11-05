import * as winston from 'winston';
import 'winston-daily-rotate-file';
import { Actor } from './actors/entities/actor.entity';
import { ActorInfo } from './actors/entities/actor-info.entity';
import { FilmActor } from './actors/entities/film-actor.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorsModule } from './actors/actors.module';
import { WinstonModule } from 'nest-winston';
import { FilmsModule } from './films/films.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Actor, ActorInfo, FilmActor],
    }),
    ActorsModule,
    FilmsModule,
    WinstonModule.forRoot({
      transports: [
        new winston.transports.DailyRotateFile({
          filename: `logs/%DATE%-combined.log`,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
          datePattern: 'YYYY-MM-DD',
          zippedArchive: false,
          maxFiles: '30d',
        }),
        new winston.transports.Console({
          format: winston.format.combine(winston.format.simple()),
        }),
      ],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
