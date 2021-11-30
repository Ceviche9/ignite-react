export type CityProps = {
  id: number;
  name: string;
  bg: string;
  country: {
    flag: string;
    name: string;
  };
  continentId: number;
}

export type ContinentPathProps = {
  continent: {
    id: number;
    title: string;
    path: string;
    description: string;
    about: string;
    bg: string;
    totalCountries: number;
    totalLanguages: number;
  },
  countries: CityProps[]
}