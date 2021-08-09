export default class SwapiService {
  _URl = "https://swapi.dev/api";

  async getData(url) {
    const res = await fetch(`${this._URl}${url}`);

    if (!res.ok) {
      throw new Error("Could");
    }

    return await res.json();
  }

  getAllPeople() {
    return this.getData("/people/");
  }

  getPerson(id) {
    return this.getData(`/people/${id}`);
  }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((body) => console.log(body));
