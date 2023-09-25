import { Request, Response } from "express";
import { ListAllChaptersService } from "../../services/chapters/ListAllChaptersService";

class ListAllChaptersControllers {
  async handle(req: Request, res: Response) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    ); // If needed
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    ); // If needed
    res.setHeader("Access-Control-Allow-Credentials", "true"); // If needed

    const { name } = req.body;

    const listAllChaptersService = new ListAllChaptersService();

    const listChapters = await listAllChaptersService.execute({ name });

    if (!listChapters) {
      return res.status(404).json({ message: "Nenhum capítulo encontrado!" });
    }

    return res.json(listChapters);
  }
}

export { ListAllChaptersControllers };
