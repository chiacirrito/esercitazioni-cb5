export const ENDPOINTS = {
  BASE: `https://random-data-api.com/api/v2`,
  get BLOOD_TYPES() {
    return `${this.BASE}/blood_types`;
  },
  get BEERS() {
    return `${this.BASE}/beers`;
  },
  get CREDIT_CARDS() {
    return `${this.BASE}/credit_cards`;
  },
  get USERS() {
    return `${this.BASE}/users`;
  },
  get BANKS() {
    return `${this.BASE}/banks`;
  },
};
