export const SET_PAGINATION_COUNT = "SET_PAGINATION_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const setPageCount = (pageCount: number) => ({
  type: SET_PAGINATION_COUNT,
  payload: pageCount,
});

export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});
