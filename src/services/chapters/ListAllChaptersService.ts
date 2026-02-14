import { books } from "../../helpers/books";

interface IListAllChaptersService {
  name: string;
}

class ListAllChaptersService {
  async execute({ name }: IListAllChaptersService) {
    if (!name) {
      throw new Error("Livro não encontrado!");
    }

    const nameBook = books.find((find) => find.name === name);

    if (!nameBook) {
      throw new Error("Nenhum livro encontrado!");
    }

    const chapters = nameBook?.chapters.map((_, index) => index + 1);

    if (!chapters) {
      throw new Error("Nenhum capítulo encontrado!");
    }

    return chapters;
  }
}

export { ListAllChaptersService };
