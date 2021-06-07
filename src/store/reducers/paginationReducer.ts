export const paginationReducer = (
  state = { pageCount: 0, currentPage: 1, issuesPerPage: 20 },
  action: any
) => {
  switch (action.type) {
    case "SET_PAGINATION_COUNT":
      return { ...state, pageCount: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
