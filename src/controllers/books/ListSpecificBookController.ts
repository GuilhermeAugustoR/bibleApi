import { Request, Response } from "express";
import { ListSpecificBookService } from "../../services/books/ListSpecificBookService";

class ListSpecificBookController {
  async handle(req: Request, res: Response) {
    const { version } = req.query;
    const name = req.params.name;

    const service = new ListSpecificBookService();

    try {
      const book = await service.execute({
        name,
        version: String(version || "ACF"),
      });

      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado!" });
      }

      return res.json(book);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { ListSpecificBookController };
