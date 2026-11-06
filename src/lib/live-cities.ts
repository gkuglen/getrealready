// Cities where Get Rent Ready is live. This mirrors COVERED_CITIES in the
// getrentready repo (derived from its data/city_zones.json), which is the
// real source of truth. There's no shared package between the two repos,
// so update this list by hand whenever a city is added there.
export const LIVE_CITIES = ['Oakland', 'Berkeley', 'Alameda'];

export const listCities = (cities: string[]) =>
  new Intl.ListFormat('en-US', { style: 'long', type: 'conjunction' }).format(
    cities,
  );
