import { Injectable } from '@nestjs/common';
import readline from 'readline';
import { IReadline } from './Readliine.interface';

@Injectable()
export class ReadlineService {
  async interface({ readableFile }: IReadline): Promise<readline.Interface> {
    const csvLines = readline.createInterface({
      input: readableFile,
    });

    return csvLines;
  }
}
