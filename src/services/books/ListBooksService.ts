import { loadBible } from "../../helpers/bibleLoader";

interface IListBooksService {
  version: string;
}

class ListBooksService {
  async execute({ version }: IListBooksService) {
    const books = loadBible(version);

    return books.map((book: any) => book.name);
  }
}

export { ListBooksService };
