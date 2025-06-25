<template>
	<div class="bg-blue-50 min-h-screen">
		<div class="p-6 max-w-screen-xl mx-auto space-y-6">
			<div
				class="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2 w-full max-w-xl"
			>
				<SearchInput v-model="searchQuery" placeholder="Cari nama negara..." />
				<FilterSelect v-model="selectedRegion" :options="regions" />
			</div>

			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				<SummaryCard
					title="Total Negara"
					:value="totalCountries"
					valueClass="text-blue-600"
				/>
				<SummaryCard
					title="Total Region"
					:value="totalRegions"
					valueClass="text-green-600"
				/>
				<SummaryCard
					title="Total Population"
					:value="formatPopulation(totalPopulation)"
					valueClass="text-orange-500"
				/>
				<SummaryCard
					title="Total Languages"
					:value="totalLanguages"
					valueClass="text-purple-600"
				/>
			</div>

			<Loader v-if="countryLoading" />
			<p v-else-if="error" class="text-red-600 text-sm">
				{{ error }}
			</p>

			<div
				v-else
				class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				<CountryCard
					v-for="country in filteredCountries"
					:key="country.name.common"
					:name="country.name.common"
					:region="country.region"
					:maps="country.maps"
					:population="country.population"
					:languages="country.languages || {}"
					@click="loadWeather(country.latlng)"
				>
					<div v-if="selected === country.latlng.join(',')">
						<Loader v-if="weatherLoading" />
						<WeatherInfo v-else-if="weather" />
					</div>
				</CountryCard>
			</div>
		</div>
		<ScrollToTopButton />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useCountryStore } from "../stores/countryStore";
import { useWeatherStore } from "../stores/weatherStore";
import { storeToRefs } from "pinia";
import { formatPopulation } from "../utils/format";

import CountryCard from "../components/CountryCard.vue";
import WeatherInfo from "../components/WeatherInfo.vue";
import FilterSelect from "../components/ui/FilterSelect.vue";
import SearchInput from "../components/ui/SearchInput.vue";
import Loader from "../components/ui/Loader.vue";
import ScrollToTopButton from "../components/ui/ScrollToTopButton.vue";
import SummaryCard from "../components/ui/SummaryCard.vue";

const countryStore = useCountryStore();
const weatherStore = useWeatherStore();
const selected = ref<string | null>(null);

const {
	filteredCountries,
	selectedRegion,
	searchQuery,
	regions,
	loading: countryLoading,
	error,
	totalCountries,
	totalRegions,
	totalPopulation,
	totalLanguages,
} = storeToRefs(countryStore);
const { weather, loading: weatherLoading } = storeToRefs(weatherStore);

onMounted(() => {
	countryStore.loadCountries();
});

async function loadWeather(latlng: [number, number]) {
	selected.value = latlng.join(",");
	await weatherStore.getWeather(latlng[0], latlng[1]);
}
</script>
