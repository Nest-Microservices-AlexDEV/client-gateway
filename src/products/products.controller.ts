import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  create() {
    return 'create';
  }

  @Get()
  findAll() {
    return 'find all';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return 'find one';
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return 'updayte';
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `el id ${id}`;
  }
}
