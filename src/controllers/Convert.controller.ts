import { Request, Response } from "express";
import { ConvertUseCase } from "../usecases";


export class ConvertController {
  constructor(private readonly covertUseCase?: ConvertUseCase) { }

  async convertCsvToJson(request: Request, response: Response) {
    const { splitCharacter } = request.body;
    const buffer = request.file?.buffer;

    await this.covertUseCase?.exec(buffer, splitCharacter);

    return response.send();
  }
}