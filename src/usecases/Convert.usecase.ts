import _ from "lodash";
import { GenerateJsonService, ReadlineService, StreamService } from "../services";

export class ConvertUseCase {
  private readonly streamService;
  private readonly readline;
  private readonly generateJson;

  constructor() {
    this.streamService = new StreamService();
    this.readline = new ReadlineService();
    this.generateJson = new GenerateJsonService();
  }

  async exec(buffer: Buffer | undefined, splitCharacter: string): Promise<void> {
    if (_.isUndefined(buffer))
      throw new Error("Nenhum arquivo inserido para converção");

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

    await this.generateJson.generate({ data: jsonConvert, fileName: "Teste" });
  }
}