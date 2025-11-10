import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { PaginationDto } from 'src/common';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productClient: ClientProxy,
  ) {}

  @Post()
  create() {
    return 'create';
  }

  @Get()
  findAllProducts(@Query() paginationDto: PaginationDto) {
    return this.productClient.send({ cmd: 'find_all_products' }, paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productClient.send({ cmd: 'find_one_product' }, { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );

    // try {
    //   const product = await firstValueFrom(
    //     this.productClient.send({ cmd: 'find_one_product' }, { id }),
    //   );
    //   return product;
    // } catch (error) {
    //   console.log('Error desde microservicio:', error);

    //   // El error que viene del microservicio ya tiene un "message"
    //   throw new RpcException(error);
    // }
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
