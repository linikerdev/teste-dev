import http from "../config/http";

export const GetThemes = () => http.get("/");

export const searchFilms = (term) => http.get(`/films/?search=${term}`);

