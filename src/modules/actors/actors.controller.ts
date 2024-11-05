import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ActorsService } from './actors.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

@ApiTags('actors')
@Controller('actors')
@UseInterceptors(LoggingInterceptor)
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create a new actor' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'The actor has been successfully created.',
  // })
  // @ApiResponse({ status: 400, description: 'Bad Request' })
  // async create(@Body() createActorDto: CreateActorDto) {
  //   return await this.actorsService.create(createActorDto);
  // }

  // @Get()
  // @ApiOperation({ summary: 'Retrieve all actors' })
  // @ApiResponse({ status: 200, description: 'Actors retrieved successfully.' })
  // findAll() {
  //   return this.actorsService.findAll();
  // }

  // @Get(':id')
  // @ApiOperation({ summary: 'Retrieve a single actor by ID' })
  // @ApiResponse({ status: 200, description: 'Actor found.' })
  // @ApiResponse({ status: 404, description: 'Actor not found.' })
  // findOne(@Param('id', ParseIntPipe) id: string) {
  //   return this.actorsService.findOne(+id);
  // }

  // @Patch(':id')
  // @ApiOperation({ summary: 'Update an actor by ID' })
  // @ApiResponse({ status: 200, description: 'Actor updated successfully.' })
  // @ApiResponse({ status: 404, description: 'Actor not found.' })
  // update(
  //   @Param('id', ParseIntPipe) id: string,
  //   @Body() updateActorDto: UpdateActorDto,
  // ) {
  //   return this.actorsService.update(+id, updateActorDto);
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: 'Delete an actor by ID' })
  // @ApiResponse({ status: 200, description: 'Actor deleted successfully.' })
  // @ApiResponse({ status: 404, description: 'Actor not found.' })
  // remove(@Param('id', ParseIntPipe) id: string) {
  //   return this.actorsService.remove(+id);
  // }
}
