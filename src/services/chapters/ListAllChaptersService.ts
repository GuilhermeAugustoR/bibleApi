import { loadBible } from "../../helpers/bibleLoader";

interface IListAllChaptersService {
  name: string;
  version: string;
}

class ListAllChaptersService {
  async execute({ name, version }: IListAllChaptersService) {
    const books = loadBible(version);

    const book = books.find(
      (find: any) => find.name.toLowerCase() === name.toLowerCase(),
    );

    if (!book) {
      throw new Error("Livro não encontrado!");
    }

    return book.chapters.map((_: any, index: number) => index + 1);
  }
}

export { ListAllChaptersService };
