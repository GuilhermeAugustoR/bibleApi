import { books } from "../../helpers/books";

class ListBooksService {
  async execute() {
    const bookNames = books.map((book) => book.name);

    return bookNames;
  }
}

export { ListBooksService };
