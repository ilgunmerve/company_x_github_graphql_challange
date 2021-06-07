export const loadIssuesReducer = (state = [], action: any) => {
  switch (action.type) {
    case "LOAD_ISSUES":
      return [...state, ...action.payload];
    case "LOAD_NEW_ISSUES":
      return [...action.payload];
    default:
      return state;
  }
};
