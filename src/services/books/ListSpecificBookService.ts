import { books } from "../../helpers/books";

interface IListSpecificBookSerice {
  name: string;
}

class ListSpecificBookService {
  async execute({ name }: IListSpecificBookSerice) {
    if (!name) {
      throw new Error("livro não encontrado!");
    }
    
    const book = books.find((find) => find.name === name);

    return book;
  }
}

export { ListSpecificBookService };
