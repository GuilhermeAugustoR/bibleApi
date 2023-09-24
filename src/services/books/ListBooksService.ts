import { books } from "../../helpers/books";

class ListBooksService {
  async execute() {
    return books;
  }
}

export { ListBooksService };
