import readline from 'readline';
import { IReadline } from './Readliine.interface';

export class ReadlineService {
  async interface({ readableFile }: IReadline): Promise<readline.Interface> {
    const csvLines = readline.createInterface({
      input: readableFile
    });

    return csvLines;
  }
}