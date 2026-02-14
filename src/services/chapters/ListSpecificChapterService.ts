import { books } from "../../helpers/books";

interface IListSpecificChapterService {
  name: string;
  chapter: string;
}

class ListSpecificChapterService {
  async execute({ name, chapter }: IListSpecificChapterService) {
    if (!name) {
      throw new Error("livro não encontrado!");
    }

    const nameBook = books.find((find) => find.name === name);

    if (!nameBook) {
      throw new Error("Nenhum livro encontrado!");
    }

    // Adicione 1 ao valor de `chapter` para obter o capítulo correto
    const specificChapter = nameBook.chapters[parseInt(chapter) - 1];

    return specificChapter;
  }
}

export { ListSpecificChapterService };
