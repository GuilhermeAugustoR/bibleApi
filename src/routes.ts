import { Router } from "express";
import { ListBooksController } from "./controllers/books/ListBooksController";
import { ListSpecificBookController } from "./controllers/books/ListSpecificBookController";

const router = Router();

router.get("/books", new ListBooksController().handle);
router.get("/specificBook", new ListSpecificBookController().handle);

export { router };
