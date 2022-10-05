import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { IStream } from './Stream.interface';

@Injectable()
export class StreamService {
  async readFile({ buffer }: IStream): Promise<Readable> {
    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    return readableFile;
  }
}
