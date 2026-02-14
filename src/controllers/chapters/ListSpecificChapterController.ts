import { Request, Response } from "express";
import { ListSpecificChapterService } from "../../services/chapters/ListSpecificChapterService";

class ListSpecificChapterController {
  async handle(req: Request, res: Response) {
    const { version } = req.query;
    const name = req.params.name;
    const chapter = req.params.chapter;

    const service = new ListSpecificChapterService();

    try {
      const specificChapter = await service.execute({
        name,
        chapter,
        version: String(version || "ACF"),
      });

      if (!specificChapter) {
        return res.status(404).json({
          message: "Nenhum capítulo encontrado!",
        });
      }

      return res.json(specificChapter);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { ListSpecificChapterController };
