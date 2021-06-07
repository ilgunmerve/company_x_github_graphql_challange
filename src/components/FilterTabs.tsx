import { memo, useEffect } from "react";
import { allActions } from "../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/types";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_ISSUE_LIST } from "../gql-query/gql-query";

import "../styles/filterTabs.scss";

const OPEN = "OPEN";
const CLOSED = "CLOSED";

export const FilterTabs = memo(function Tabs() {
  const dispatch = useDispatch();
  const stateFilter = useSelector((state: RootState) => state.filtersReducer);
  const [executeSearch, { data }] = useLazyQuery(GET_ISSUE_LIST);
  const paginationData = useSelector(
    (state: RootState) => state.paginationReducer
  );
  const handleChangeFilter = (filter: string) => {
    let currentFilterValue: string | null = null;

    /*     Update filter on click; 
    if the same button clicked twice in a row, it should revert (remove) the filter (null) */
    if (
      (filter === OPEN && stateFilter === filter) ||
      (filter === CLOSED && stateFilter === filter)
    ) {
      dispatch(allActions.setFilter(null));
      currentFilterValue = null;
    } else if (filter === OPEN && stateFilter !== filter) {
      currentFilterValue = OPEN;
      dispatch(allActions.setFilter(OPEN));
    } else if (filter === CLOSED && stateFilter !== filter) {
      currentFilterValue = CLOSED;
      dispatch(allActions.setFilter(CLOSED));
    }

    executeSearch({
      variables: { after: null, states: currentFilterValue },
    });
  };

  /* If filter changes, fetch filtered values 
  Calculate new page count */
  useEffect(() => {
    if (data) {
      dispatch(allActions.loadNewIssues(data.repository.issues.nodes));
      dispatch(
        allActions.setPageCount(
          Math.ceil(
            data.repository.issues.totalCount / paginationData.issuesPerPage
          )
        )
      );
      dispatch(allActions.setCurrentPage(1));
    }
  }, [data, stateFilter, dispatch]);

  /* style bold the selected filter */
  return (
    <div className="tabs">
      <button
        className={`button${
          stateFilter === OPEN ? stateFilter.toLowerCase() : ""
        }`}
        onClick={() => handleChangeFilter(OPEN)}
      >
        Open
      </button>
      <button
        className={`button${
          stateFilter === CLOSED ? stateFilter.toLowerCase() : ""
        }`}
        onClick={() => handleChangeFilter(CLOSED)}
      >
        Close
      </button>
    </div>
  );
});
