import { Router } from "express";
import { ListBooksController } from "./controllers/books/ListBooksController";
import { ListSpecificBookController } from "./controllers/books/ListSpecificBookController";
import { ListAllChaptersControllers } from "./controllers/chapters/ListAllChaptersControllers";
import { ListSpecificChapterController } from "./controllers/chapters/ListSpecificChapterController";

const router = Router();

router.get("/versions", (req, res) => {
  const fs = require("fs");
  const path = require("path");

  const helpersPath = path.join(process.cwd(), "data");

  if (!fs.existsSync(helpersPath)) {
    return res.json([]);
  }

  const files = fs.readdirSync(helpersPath);

  const versions = files
    .filter((file: string) => file.endsWith(".json"))
    .map((file: string) => file.replace(".json", ""));

  res.json(versions);
});

router.get("/books", new ListBooksController().handle);
router.get("/specificBook/:name", new ListSpecificBookController().handle);
router.get("/chapters/:name", new ListAllChaptersControllers().handle);
router.get(
  "/specificChapter/:name/:chapter",
  new ListSpecificChapterController().handle,
);

export { router };
