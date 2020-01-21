export const actions = {
  SET_FILTER: "SET_FILTER",
};
export const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_FILTERED: "SHOW_FILTERED"
};
export const setFilter = (option, text) => {
  return {
    type: actions.SET_FILTER,
    payload: { option: option, search:text }
  };
};
