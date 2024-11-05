import { MaxLength, IsString, IsOptional, IsInt, Min, Max, IsEnum, IsArray, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmDto {
  @IsString()
  @MaxLength(255)
  @ApiProperty({
    description: 'The title of the film',
    example: 'The Godfather',
  })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'A brief description of the film',
    example: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  })
  description?: string;

  @IsInt()
  @Max(new Date().getFullYear())
  @IsOptional()
  @ApiProperty({
    description: 'The year the film was released',
    example: 1972,
  })
  release_year?: number;

  @IsInt()
  @ApiProperty({
    description: 'ID of the language of the film',
    example: 1,
  })
  language_id: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    description: 'ID of the original language of the film (if any)',
    example: 2,
  })
  original_language_id?: number;

  @IsInt()
  @Min(1)
  @ApiProperty({
    description: 'The rental duration of the film (in days)',
    example: 3,
    default: 3,
  })
  rental_duration: number = 3;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(99.99)
  @ApiProperty({
    description: 'The rental rate of the film',
    example: 4.99,
    default: 4.99,
  })
  rental_rate: number = 4.99;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    description: 'The length of the film (in minutes)',
    example: 175,
  })
  length?: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(999.99)
  @ApiProperty({
    description: 'The replacement cost of the film',
    example: 19.99,
    default: 19.99,
  })
  replacement_cost: number = 19.99;

  @IsEnum(['G', 'PG', 'PG-13', 'R', 'NC-17'])
  @IsOptional()
  @ApiProperty({
    description: 'The rating of the film',
    example: 'R',
    default: 'G',
  })
  rating: string = 'G';

  @IsArray()
  @IsOptional()
  @IsEnum(['Trailers', 'Commentaries', 'Deleted Scenes', 'Behind the Scenes'], { each: true })
  @ApiProperty({
    description: 'Special features available for the film',
    example: ['Trailers', 'Deleted Scenes'],
  })
  special_features?: string[];
}
