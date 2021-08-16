import http from "../config/http";

export const GetThemes = () => http.get("/");

export const searchTerm = (type, term) =>
  http.get(`/${type}/?search=${term}`);
