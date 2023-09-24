import { Request, Response } from "express";
import { ListSpecificChapterService } from "../../services/chapters/ListSpecificChapterService";

class ListSpecificChapterController {
  async handle(req: Request, res: Response) {
    const { name, chapter } = req.body;
    const listSpecificChapterService = new ListSpecificChapterService();

    const specificChapter = await listSpecificChapterService.execute({
      name,
      chapter,
    });

    if (!specificChapter) {
      return res.status(404).json({ message: "Nenhum capítulo encontrado!" });
    }

    return res.json(specificChapter);
  }
}

export { ListSpecificChapterController };
