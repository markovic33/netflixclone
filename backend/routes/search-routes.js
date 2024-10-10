import express from "express";
import { getSearchHistory, removeFromSearchHistory, searchMovie, searchPerson, searchShow } from "../controllers/search-controller.js";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchShow);

router.get("/history", getSearchHistory);

router.delete("/history/:id", removeFromSearchHistory);


export default router;