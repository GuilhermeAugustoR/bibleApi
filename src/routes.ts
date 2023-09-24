import { Router } from "express";
import { ListBooksController } from "./controllers/books/ListBooksController";
import { ListSpecificBookController } from "./controllers/books/ListSpecificBookController";
import { ListAllChaptersControllers } from "./controllers/books/ListAllChaptersControllers";

const router = Router();

router.get("/books", new ListBooksController().handle);
router.get("/specificBook", new ListSpecificBookController().handle);
router.get("/chapters", new ListAllChaptersControllers().handle);

export { router };
