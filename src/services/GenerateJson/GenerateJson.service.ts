import fs from 'fs';
import { IGenarateJson } from './GenarateJson.interface';

export class GenerateJson {
  async generate({ data, fileName }: IGenarateJson): Promise<void> {
    fs.writeFile(`${fileName}.json`, JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('O arquivo json foi criado!');
    });
  }
}