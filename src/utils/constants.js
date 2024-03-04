const GOOGLE_API_KEY = "AIzaSyADVLzIKwoU9L5Ug1jwdcPMbfWeQTb-NJA";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
// export const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&key= " + GOOGLE_API_KEY + "&client=firefox&ds=yt&q=";