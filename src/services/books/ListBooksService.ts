import { books } from "../../helpers/books";

class ListBooksService {
  async execute() {
    const bookNames = books.map((book) => book.nome);
    console.log(bookNames);

    return bookNames;
  }
}

export { ListBooksService };
