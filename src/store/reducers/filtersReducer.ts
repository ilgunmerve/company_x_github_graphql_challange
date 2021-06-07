export const filtersReducer = (state = null, action: any) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};
