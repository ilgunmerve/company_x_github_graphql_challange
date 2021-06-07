import { loadIssues, loadNewIssues } from "./loadIssuesAction";
import { setFilter } from "./filtersAction";
import { setPageCount, setCurrentPage } from "./paginationAction";

export const allActions = {
  loadIssues,
  loadNewIssues,
  setPageCount,
  setCurrentPage,
  setFilter,
};
