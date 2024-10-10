import express from "express";
import { getSimilarTvSHows,
	getTrendingTvShows,
	getTvShowsDetails,
	getTvShowsByCategory,
	getTvShowsTrailers } from "../controllers/tvshows-controller.js";

const router = express.Router();

router.get("/trending", getTrendingTvShows);
router.get("/:id/trailers", getTvShowsTrailers);
router.get("/:id/details", getTvShowsDetails);
router.get("/:id/similar", getSimilarTvSHows);
router.get("/:category", getTvShowsByCategory);

export default router;
