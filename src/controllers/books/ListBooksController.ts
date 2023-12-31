import { Request, Response } from "express";
import { ListBooksService } from "../../services/books/ListBooksService";

class ListBooksController {
  async handle(req:Request, res: Response) {
    const listBooksService = new ListBooksService();

    const listBooks = await listBooksService.execute();

    return res.json(listBooks);
  }
}

export { ListBooksController };
