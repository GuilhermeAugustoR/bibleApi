import { Request, Response } from "express";
import { ListAllChaptersService } from "../../services/chapters/ListAllChaptersService";

class ListAllChaptersControllers {
  async handle(req: Request, res: Response) {
    const { version } = req.query;
    const name = req.params.name;

    const service = new ListAllChaptersService();

    try {
      const chapters = await service.execute({
        name,
        version: String(version || "ACF"),
      });

      return res.json(chapters);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { ListAllChaptersControllers };
