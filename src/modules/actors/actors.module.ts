import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './entities/actor.entity';
import { ActorInfo } from './entities/actor-info.entity';
import { FilmActor } from './entities/film-actor.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Actor, ActorInfo, FilmActor]),
    AuthModule,
  ],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule {}
