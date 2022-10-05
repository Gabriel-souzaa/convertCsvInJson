import { ApiProperty } from '@nestjs/swagger';
import * as _ from 'lodash';

export class ConvertCsvToJsonDTO {
  @ApiProperty({
    required: true,
    type: 'string',
    format: 'binary',
  })
  file: any;

  @ApiProperty({
    required: true,
    type: String,
    example: ',',
  })
  splitCharacter: string;
}
