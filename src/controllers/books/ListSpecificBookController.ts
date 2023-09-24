import { Request, Response } from "express";
import { ListSpecificBookService } from "../../services/books/ListSpecificBookService";

class ListSpecificBookController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const listSpecificBook = new ListSpecificBookService();

    const specificBook = await listSpecificBook.execute({ name });

    if (!specificBook) {
      return res.status(404).json({ message: "Livro não encontrado!" });
    }
    console.log(specificBook);

    return res.json(specificBook);
  }
}

export { ListSpecificBookController };
