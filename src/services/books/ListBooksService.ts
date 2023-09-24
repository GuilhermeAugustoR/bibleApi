import { books } from "../../helpers/books";

class ListBooksService {
  async execute() {
    const bookNames = books.map((book) => book.nome);

    return bookNames;
  }
}

export { ListBooksService };
