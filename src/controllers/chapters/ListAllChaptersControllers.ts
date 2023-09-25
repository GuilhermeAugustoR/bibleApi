import { Request, Response } from "express";
import { ListAllChaptersService } from "../../services/chapters/ListAllChaptersService";

class ListAllChaptersControllers {
  async handle(req: Request, res: Response) {
    const name = req.params.name;

    const listAllChaptersService = new ListAllChaptersService();

    const listChapters = await listAllChaptersService.execute({ name });

    if (!listChapters) {
      return res.status(404).json({ message: "Nenhum capítulo encontrado!" });
    }

    return res.json(listChapters);
  }
}

export { ListAllChaptersControllers };
