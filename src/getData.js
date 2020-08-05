import { map } from './mapSVG';

// Getting data

for (var key in map) {
  map[key].click(function () {
    const city = [];
    city.length = 0;
    city.push(this[0].data('cityId'));

    const url = `https://bdl.stat.gov.pl/api/v1/data/by-variable/633462?unit-parent-id=${city[0]}&unit-level=5&aggregate-id=1&page=0&page-size=10`;

    const getData = function () {
      const response = fetch(`${url}`, {
        headers: {
          Accept: 'application/json',
        },
      });
      return response;
    };

    const info = async () => {
      const infoData = await (await getData()).json();
      console.log(infoData.results[0].name);
      console.log(infoData.results[0].values);
    };
    console.log(info());
  });
}
