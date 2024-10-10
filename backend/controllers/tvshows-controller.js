import { fetchFromTMDB } from "../services/tmdb-service.js";

export async function getTrendingTvShows(req, res) {
    try {
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");
        const randomShow = data.results[Math.floor(Math.random() * data.results?.length)];

        res.status(200).json({success: true, content: randomShow});
    } catch (error) {
        res.status(500).json({success:false, message: "Server error"});
        console.log("Error in getTrendingTvShows: ", error.message);
    }
}

export async function getTvShowsTrailers(req, res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);

        res.status(200).json({success: true, trailers: data.results});
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }

        res.status(500).json({success:false, message: "Server error"});
        console.log("Error in getTvShowsTrailers: ", error.message);
    }
}

export async function getTvShowsDetails(req, res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);

        res.status(200).json({success: true, content: data});
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }

        res.status(500).json({success:false, message: "Server error"});
        console.log("Error in getTvShowsDetails: ", error.message);
    }
}

export async function getSimilarTvSHows(req, res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);

        res.status(200).json({success: true, similar: data.results});
    } catch (error) {
        res.status(500).json({success:false, message: "Server error"});
        console.log("Error in getSimilarTvSHows: ", error.message);
    }
}

export async function getTvShowsByCategory(req, res) {
    const {category} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);

        res.status(200).json({success: true, content: data.results});
    } catch (error) {
        res.status(500).json({success:false, message: "Server error"});
        console.log("Error in getTvShowsByCategory: ", error.message);
    }
}