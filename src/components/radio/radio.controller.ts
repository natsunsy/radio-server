import {
  Body,
  Controller,
  Post,
  HttpException,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateRadioDto } from './dto/createRadio.dto';
import { UpdateRadioDto } from './dto/updateRadio.dto';
import { RadioService } from './radio.service';

@Controller('radios')
export class RadioController {
  constructor(private radioService: RadioService) {}

  @Post()
  async createRadio(@Body() request: CreateRadioDto) {
    try {
      return await this.radioService.createRadio(request);
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }

  @Get(':id')
  async getRadioById(@Param('id') id: string) {
    try {
      return await this.radioService.getRadioById(id);
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }

  @Get()
  async getAllRadios() {
    try {
      return await this.radioService.getAll();
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }

  @Put(':id')
  async updateRadio(@Param('id') id: string, @Body() request: UpdateRadioDto) {
    try {
      return await this.radioService.updateRadio(id, request);
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }

  @Delete(':id')
  async removeRadio(@Param('id') id: string) {
    try {
      return await this.radioService.deleteRadio(id);
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }
}
