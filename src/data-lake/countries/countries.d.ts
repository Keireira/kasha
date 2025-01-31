export type CountryT = {
	name: string;
	flag: string;
	alpha_2: string;
	languages: string[];
	slogan?: string;
};

export type CountriesSlice = {
	byId: Record<string, CountryT>;
	allIds: string[];
	searchQuery: string;
};
