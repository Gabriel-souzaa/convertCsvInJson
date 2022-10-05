import { Module } from '@nestjs/common';
import {
  GenerateJsonService,
  ReadlineService,
  StreamService,
} from '../../services';
import { ConvertController } from './convert.controller';
import { ConvertUseCase } from './convert.usecase';

@Module({
  imports: [],
  controllers: [ConvertController],
  providers: [
    ConvertUseCase,
    StreamService,
    ReadlineService,
    GenerateJsonService,
  ],
})
export class ConvertModule { }
