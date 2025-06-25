import { defineStore } from "pinia";
import type { Country } from "../types/country";
import { fetchCountries } from "../api/countries";

export const useCountryStore = defineStore("country", {
	state: () => ({
		countries: [] as Country[],
		selectedRegion: "All Regions" as string,
		searchQuery: "",
		loading: false,
		error: null as string | null,
	}),

	getters: {
		filteredCountries(state): Country[] {
			return state.countries.filter((country) => {
				const matchRegion =
					state.selectedRegion === "" ||
					state.selectedRegion === "All Regions" ||
					country.region === state.selectedRegion;

				const matchSearch =
					state.searchQuery.trim() === "" ||
					country.name.common
						.toLowerCase()
						.includes(state.searchQuery.toLowerCase());

				return matchRegion && matchSearch;
			});
		},

		regions(state): string[] {
			const regionSet = new Set<string>();
			state.countries.forEach((c) => {
				if (c.region) regionSet.add(c.region);
			});
			return ["All Regions", ...Array.from(regionSet).sort()];
		},

		totalCountries(state): number {
			return state.countries.length;
		},

		totalRegions(state): number {
			const regionSet = new Set(
				state.countries.map((c) => c.region).filter(Boolean)
			);
			return regionSet.size;
		},

		totalPopulation(state): number {
			return state.countries.reduce(
				(acc, country) => acc + (country.population ?? 0),
				0
			);
		},

		totalLanguages(state): number {
			const langSet = new Set<string>();
			state.countries.forEach((country) => {
				if (country.languages) {
					Object.values(country.languages).forEach((lang) => langSet.add(lang));
				}
			});
			return langSet.size;
		},
	},

	actions: {
		async loadCountries() {
			this.loading = true;
			this.error = null;

			try {
				const res = await fetchCountries();
				this.countries = res.sort((a, b) =>
					a.name.common.localeCompare(b.name.common)
				);
			} catch (err) {
				this.error = "Gagal memuat data negara";
			} finally {
				this.loading = false;
			}
		},

		setRegion(region: string) {
			this.selectedRegion = region;
		},
	},
});
