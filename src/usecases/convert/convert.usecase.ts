import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import {
  GenerateJsonService,
  ReadlineService,
  StreamService,
} from '../../services';

@Injectable()
export class ConvertUseCase {
  constructor(
    private streamService: StreamService,
    private readline: ReadlineService,
    private generateJson: GenerateJsonService,
  ) { }

  async exec(
    buffer: Buffer | undefined,
    splitCharacter: string,
  ): Promise<void> {
    if (_.isUndefined(buffer))
      throw new Error('Nenhum arquivo inserido para converção');

    const readableFile = await this.streamService.readFile({ buffer });

    const linesCsv = await this.readline.interface({ readableFile });

    const jsonConvert: any[] = [];

    for await (const line of linesCsv) {
      const lineSplit = line.split(splitCharacter);

      jsonConvert.push({
        id: lineSplit[0],
        name: lineSplit[1],
      });
    }

    await this.generateJson.generate({ data: jsonConvert, fileName: 'Teste' });
  }
}
