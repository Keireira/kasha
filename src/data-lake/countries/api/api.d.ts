import type { CountryT } from '@data/countries';

// Get Countries list
export type GetCountriesReqT = void;
export type GetCountriesResT = CountryT[];

// Get full info about country
export type GetCountryResT = RequiredAll<CountryT>;
export type GetCountryReqT = { countryId: string };
