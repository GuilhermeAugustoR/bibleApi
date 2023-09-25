import { Router } from "express";
import { ListBooksController } from "./controllers/books/ListBooksController";
import { ListSpecificBookController } from "./controllers/books/ListSpecificBookController";
import { ListAllChaptersControllers } from "./controllers/chapters/ListAllChaptersControllers";
import { ListSpecificChapterController } from "./controllers/chapters/ListSpecificChapterController";

const router = Router();

router.get("/books", new ListBooksController().handle);
router.get("/specificBook", new ListSpecificBookController().handle);
router.get("/chapters/:name", new ListAllChaptersControllers().handle);
router.get("/specificChapter/:name/:chapter", new ListSpecificChapterController().handle)

export { router };
