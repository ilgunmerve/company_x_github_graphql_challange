import { loadIssuesReducer } from "./loadIssuesReducer";
import { paginationReducer } from "./paginationReducer";
import { filtersReducer } from "./filtersReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loadIssuesReducer,
  paginationReducer,
  filtersReducer,
});
