export type CountryT = {
	name: string;
	flag: string;
	alpha_2: string;
	currency?: string;
	capital?: string;
	population?: number;
	languages?: string[];
	slogan?: string;
	description?: string;
};

export type CountriesSlice = {
	byId: Record<string, CountryT>;
	allIds: string[];
	searchQuery: string;
};
