import axios from "axios";
import { YOUTUBE_API_KEY } from "../../Config";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 1,
    order: 'rating',
    key: YOUTUBE_API_KEY,
  },
  headers: {}
});