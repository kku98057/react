import axios from "axios";

export default class Search {
  constructor() {}
  async search(keyword) {
    return keyword
      ? this.#searchByKeyword(keyword)
      : this.#searchByNonKeyword("");
  }
  #searchByKeyword(keyword) {
    return axios
      .create({
        baseURL: "https://yts.mx/api/v2/",
      })
      .get("list_movies.json", {
        params: {
          limit: 50,
          // query_term: query.SearchResult,
          // quality: "3D",
          // minimum_rating: 9,
          query_term: keyword,
        },
      })
      .then((res) => res.data);
  }
  #searchByNonKeyword() {
    alert("lol");
  }
}
