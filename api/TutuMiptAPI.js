import 'whatwg-fetch';

const TutuMiptAPI = {
  fetchTrainRoutes() {
    return fetch('https://api.rasp.yandex.net/v1.0/search/?apikey={d9a1361a-6c52-4926-8bfd-166b3939c846}&format=json&from=c146&to=c213&lang=ru&page=1&date=2015-09-02')
      .then((response) => response.json());
  }
};

export default TutuMiptAPI;
