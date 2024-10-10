import express from "express";

import { protectRoute } from "./middleware/protectedRoutes.js";
import authRoutes from "./routes/auth-routes.js";
import movieRoutes from "./routes/movie-routes.js";
import tvshowRoutes from "./routes/tvshow-routes.js";
import searcRoutes from "./routes/search-routes.js";
import path from "path";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";




const app = express();
const PORT  = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvshowRoutes);
app.use("/api/v1/search", protectRoute, searcRoutes);

if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}



app.listen(PORT, () => {
    console.log("Aktiv on: ", PORT );
    connectDB();
})
