import express, { Request, Router, Response } from 'express';
import multer from 'multer';
import fs from 'fs';
import { Readable } from 'stream';
import readline from 'readline';

const app = express();
const multerConfig = multer();

const router = Router();

router.post("/convert", multerConfig.single("file"), async (request: Request, response: Response) => {
  const { splitCharacter } = request.body;
  const buffer = request.file?.buffer;

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const linesCsv = readline.createInterface({
    input: readableFile
  });

  const jsonCsv = [];

  for await (const line of linesCsv) {
    const lineSplit = line.split(splitCharacter);

    jsonCsv.push({
      id: String(lineSplit[0]),
      name: lineSplit[1],
    });
  }

  fs.writeFile('name.json', JSON.stringify(jsonCsv), (err) => {
    if (err) throw err;

    console.log('O arquivo json foi criado!');
  });

  return response.send();
});

app.use(router);
app.listen(3000, () => console.log("Server start!!"));