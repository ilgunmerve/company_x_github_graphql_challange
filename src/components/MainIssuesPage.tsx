import { memo, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { RootState, IssueProps } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { allActions } from "../store/actions/index";
import { Pagination } from "./Pagination";
import { GET_ISSUE_LIST } from "../gql-query/gql-query";
import { FilterTabs } from "./FilterTabs";
import { IssueList } from "./IssueList";

export const MainIssuesPage = memo(function MainIssuesPage() {
  const [currentIssues, setCurrentIssues] =
    useState<null | Array<IssueProps>>(null);
  const issueList = useSelector((state: RootState) => state.loadIssuesReducer);
  const filter = useSelector((state: RootState) => state.filtersReducer);
  const paginationData = useSelector(
    (state: RootState) => state.paginationReducer
  );

  const { data, loading, error, fetchMore } = useQuery(GET_ISSUE_LIST, {
    variables: { after: null, states: null },
  });

  const dispatch = useDispatch();
  const [offset, setOffset] = useState(1);
  const currentPage = paginationData.currentPage;

  /* Display the currently selected (20) issues */
  useEffect(() => {
    const indexOfLastIssue =
      paginationData.currentPage * paginationData.issuesPerPage;
    const indexOfFirstIssue = indexOfLastIssue - paginationData.issuesPerPage;
    if (issueList.length > 0)
      setCurrentIssues(issueList.slice(indexOfFirstIssue, indexOfLastIssue));
  }, [issueList, paginationData]);

  /*   If there is data, update redux store */
  useEffect(() => {
    if (data) {
      dispatch(allActions.loadIssues(data.repository.issues.nodes));
      dispatch(
        allActions.setPageCount(
          Math.ceil(
            data.repository.issues.totalCount / paginationData.issuesPerPage
          )
        )
      );
    }
  }, [dispatch, paginationData.issuesPerPage, data]);

  // Pagination; Fetch next 100 issues
  const handleClickNext = () => {
    const { endCursor } = data.repository.issues.pageInfo;
    setOffset((offset) => offset + 5);
    fetchMore({
      variables: { after: endCursor, states: filter },
      updateQuery: (
        prevResult: Array<IssueProps>,
        { fetchMoreResult }: any
      ) => {
        return fetchMoreResult;
      },
    });
  };

  // Pagination; Go back to previous pages (already loaded)
  const handleClickPrev = () => {
    setOffset((offset) => offset - 5);
  };

  const paginate = (page: number) => {
    if (currentPage !== page) dispatch(allActions.setCurrentPage(page));
  };

  if (loading) return <div className="list__loading">Loading...</div>;
  if (error) return <div className="list__error">Error...</div>;

  return (
    <>
      <div className="FilterTabs">
        <FilterTabs />
      </div>
      <IssueList currentIssues={currentIssues} />
      <Pagination
        paginate={paginate}
        clickNext={handleClickNext}
        clickPrev={handleClickPrev}
        offset={offset}
      />
    </>
  );
});
