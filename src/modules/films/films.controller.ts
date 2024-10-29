import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@ApiTags('films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new film' })
  @ApiResponse({
    status: 201,
    description: 'The film has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async create(@Body() createFilmDto: CreateFilmDto) {
    return await this.filmsService.create(createFilmDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all films' })
  @ApiResponse({ status: 200, description: 'Films retrieved successfully.' })
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single film by ID' })
  @ApiResponse({ status: 200, description: 'Film found.' })
  @ApiResponse({ status: 404, description: 'Film not found.' })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.filmsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a film by ID' })
  @ApiResponse({ status: 200, description: 'Film updated successfully.' })
  @ApiResponse({ status: 404, description: 'Film not found.' })
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateFilmDto: UpdateFilmDto,
  ) {
    return this.filmsService.update(+id, updateFilmDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a film by ID' })
  @ApiResponse({ status: 200, description: 'Film deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Film not found.' })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.filmsService.remove(+id);
  }
}
