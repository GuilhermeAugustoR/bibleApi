import { books } from "../../helpers/books";

interface IListSpecificChapterService {
  name: string;
  chapter: number;
}

class ListSpecificChapterService {
  async execute({ name, chapter }: IListSpecificChapterService) {
    if (!name) {
      throw new Error("livro não encontrado!");
    }

    const nameBook = books.find((find) => find.nome === name);

    if (!nameBook) {
      throw new Error("Nenhum livro encontrado!");
    }

    // Adicione 1 ao valor de `chapter` para obter o capítulo correto
    const specificChapter = nameBook.capitulos[chapter - 1];

    return specificChapter;
  }
}

export { ListSpecificChapterService };
