import { MaxLength, IsString, IsOptional, IsInt, Min, Max, IsEnum, IsNumber, IsArray } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmDto } from './create-film.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFilmDto extends PartialType(CreateFilmDto) {
  @IsString()
  @MaxLength(255)
  @ApiProperty({
    description: 'The updated title of the film',
    example: 'The Godfather Part II',
  })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'An updated description of the film',
    example: 'The continuing saga of the Corleone crime family.',
  })
  description?: string;

  @IsInt()
  @Max(new Date().getFullYear())
  @IsOptional()
  @ApiProperty({
    description: 'The updated release year of the film',
    example: 1974,
  })
  release_year?: number;

  @IsInt()
  @ApiProperty({
    description: 'The updated language ID of the film',
    example: 1,
  })
  language_id: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    description: 'The updated original language ID of the film',
    example: 2,
  })
  original_language_id?: number;

  @IsInt()
  @Min(1)
  @ApiProperty({
    description: 'The updated rental duration of the film',
    example: 5,
    default: 3,
  })
  rental_duration: number = 3;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(99.99)
  @ApiProperty({
    description: 'The updated rental rate of the film',
    example: 6.99,
    default: 4.99,
  })
  rental_rate: number = 4.99;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    description: 'The updated length of the film',
    example: 200,
  })
  length?: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(999.99)
  @ApiProperty({
    description: 'The updated replacement cost of the film',
    example: 25.99,
    default: 19.99,
  })
  replacement_cost: number = 19.99;

  @IsEnum(['G', 'PG', 'PG-13', 'R', 'NC-17'])
  @IsOptional()
  @ApiProperty({
    description: 'The updated rating of the film',
    example: 'PG-13',
    default: 'G',
  })
  rating: string = 'G';

  @IsArray()
  @IsOptional()
  @IsEnum(['Trailers', 'Commentaries', 'Deleted Scenes', 'Behind the Scenes'], { each: true })
  @ApiProperty({
    description: 'Updated special features available for the film',
    example: ['Commentaries', 'Behind the Scenes'],
  })
  special_features?: string[];
}
