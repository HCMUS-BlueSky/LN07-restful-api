import { HttpService } from '@nestjs/axios';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Film } from './entities/film.entity';
import { AxiosResponse } from 'axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class FilmsService {
  constructor(private readonly httpService: HttpService) {}

  // Step 3
  // findAll() {
  //   return this.httpService.get<Film[]>('http://localhost:3001/films').pipe(
  //     catchError(() => {
  //       throw new UnauthorizedException('Unauthorized from server B');
  //     }),
  //     map((response: AxiosResponse<Film[]>) => response.data),
  //   );
  // }

  // Step 4
  findAll() {
    return this.httpService
      .get<Film[]>('http://localhost:3001/films', {
        headers: {
          APIKey: process.env.SECRET_KEY,
        },
      })
      .pipe(
        catchError(() => {
          throw new UnauthorizedException('Unauthorized from server B');
        }),
        map((response: AxiosResponse<Film[]>) => response.data),
      );
  }
}
