import cities from 'cities.json';

const findCity = (cityName, countryCode) => {
  const city = cities.find(location =>
    location.name === cityName && location.country === countryCode);
  return {
    latitude: city.lat,
    longitude: city.lng,
  };
};

const locations = [
  {
    thickness: 50,
    height: 0.4,
    opacity: 0.7,
    coords: [
      findCity('Mexico City', 'MX'),
      findCity('Paris', 'FR'),
    ],
  },
  {
    thickness: 10,
    height: 0.5,
    opacity: 1,
    coords: [
      findCity('Mexico City', 'MX'),
      findCity('Dubai', 'AE'),
    ],
  },
  {
    thickness: 5,
    height: 0.5,
    opacity: 0.3,
    coords: [
      findCity('Mexico City', 'MX'),
      findCity('Seoul', 'KR'),
    ],
  },
  {
    thickness: 5,
    height: 0.7,
    opacity: 1,
    coords: [
      findCity('Los Angeles', 'US'),
      findCity('New York City', 'US'),
    ],
  },
  {
    thickness: 75,
    height: 0.5,
    opacity: 0.4,
    coords: [
      findCity('Los Angeles', 'US'),
      findCity('Madrid', 'ES'),
    ],
  },
  {
    thickness: 30,
    height: 0.6,
    opacity: 0.8,
    coords: [
      findCity('Brasília', 'BR'),
      findCity('Beijing', 'CN'),
    ],
  },
];

export default locations;
