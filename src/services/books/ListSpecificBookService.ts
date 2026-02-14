import { loadBible } from "../../helpers/bibleLoader";

interface IListSpecificBookSerice {
  name: string;
  version: string;
}

class ListSpecificBookService {
  async execute({ name, version }: IListSpecificBookSerice) {
    const books = loadBible(version);

    const book = books.find(
      (find: any) => find.name.toLowerCase() === name.toLowerCase(),
    );

    return book;
  }
}

export { ListSpecificBookService };
