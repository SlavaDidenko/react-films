export default class GetFilms {
  static async allFilms(id) {
    const response = (await fetch(`https://kinobd.ru/api/films?page=${id}`));
    return response.json();
  }

  static async getFilm(id) {
    const response = (await fetch(`https://kinobd.ru/api/films/${id}`));
    return response.json();
  }
}

