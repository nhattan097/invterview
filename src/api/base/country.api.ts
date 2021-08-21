import ICountry from 'interfaces/country';

export abstract class CountryApi {
  abstract getCountries(): Promise<{ data: ICountry[] }>;
}
