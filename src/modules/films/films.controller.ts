import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { FilmsService } from './films.service';

import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('films')
@Controller('films')
@ApiHeader({
  name: 'APIKey',
})
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create a new film' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'The film has been successfully created.',
  // })
  // @ApiResponse({ status: 400, description: 'Bad Request' })
  // async create(@Body() createFilmDto: CreateFilmDto) {
  //   return await this.filmsService.create(createFilmDto);
  // }

  @Get()
  // @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Retrieve all films' })
  @ApiResponse({ status: 200, description: 'Films retrieved successfully.' })
  findAll() {
    return this.filmsService.findAll();
  }

  // @Get(':id')
  // @ApiOperation({ summary: 'Retrieve a single film by ID' })
  // @ApiResponse({ status: 200, description: 'Film found.' })
  // @ApiResponse({ status: 404, description: 'Film not found.' })
  // findOne(@Param('id', ParseIntPipe) id: string) {
  //   return this.filmsService.findOne(+id);
  // }

  // @Patch(':id')
  // @ApiOperation({ summary: 'Update a film by ID' })
  // @ApiResponse({ status: 200, description: 'Film updated successfully.' })
  // @ApiResponse({ status: 404, description: 'Film not found.' })
  // update(
  //   @Param('id', ParseIntPipe) id: string,
  //   @Body() updateFilmDto: UpdateFilmDto,
  // ) {
  //   return this.filmsService.update(+id, updateFilmDto);
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: 'Delete a film by ID' })
  // @ApiResponse({ status: 200, description: 'Film deleted successfully.' })
  // @ApiResponse({ status: 404, description: 'Film not found.' })
  // remove(@Param('id', ParseIntPipe) id: string) {
  //   return this.filmsService.remove(+id);
  // }
}
