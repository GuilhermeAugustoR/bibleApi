import { Request, Response } from "express";
import { ListBooksService } from "../../services/books/ListBooksService";

class ListBooksController {
  async handle(req: Request, res: Response) {
    const { version } = req.query;

    const service = new ListBooksService();

    try {
      const books = await service.execute({
        version: String(version || "ACF"),
      });

      return res.json(books);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { ListBooksController };
