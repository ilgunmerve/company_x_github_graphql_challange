export const SET_FILTER = "SET_FILTER";

export const setFilter = (filter: string | null) => ({
  type: SET_FILTER,
  payload: filter,
});
