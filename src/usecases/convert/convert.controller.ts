import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ConvertCsvToJsonDTO } from '../../shared/dtos';
import { ConvertUseCase } from './convert.usecase';

@Controller('api/convert/')
@ApiTags('Convert')
export class ConvertController {
  constructor(private readonly covertUseCase: ConvertUseCase) { }

  @Post()
  @ApiOperation({
    description: 'Converter arquivo CSV para Json',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Corpo da requisição',
    type: ConvertCsvToJsonDTO,
  })
  @ApiCreatedResponse({
    description: 'Arquivo convertido com sucesso',
  })
  @UseInterceptors(FilesInterceptor('file'))
  async convertCsvToJson(
    @UploadedFiles() file: Express.Multer.File,
    @Body() data: ConvertCsvToJsonDTO,
  ): Promise<void> {
    const { splitCharacter } = data;
    const { buffer } = file[0];

    await this.covertUseCase.exec(buffer, splitCharacter);
  }
}
