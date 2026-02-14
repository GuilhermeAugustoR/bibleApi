import { loadBible } from "../../helpers/bibleLoader";

interface IListSpecificChapterService {
  name: string;
  chapter: string;
  version: string;
}

class ListSpecificChapterService {
  async execute({ name, chapter, version }: IListSpecificChapterService) {
    const books = loadBible(version);

    const book = books.find(
      (find: any) => find.name.toLowerCase() === name.toLowerCase(),
    );

    if (!book) {
      throw new Error("Livro não encontrado!");
    }

    const chapterIndex = parseInt(chapter) - 1;

    return book.chapters[chapterIndex];
  }
}

export { ListSpecificChapterService };
