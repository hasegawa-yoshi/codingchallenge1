
const API_KEY = "4f572de575a44a43f43968b4c4d31e12"; 

export const requests ={
    feactMovies:`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`,
    searchMovies:`/search/movie?api_key=${API_KEY}&query=ドラゴンボール&page=1`,
}