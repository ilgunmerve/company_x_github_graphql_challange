export type RootState = {
  loadIssuesReducer: Array<any>;
  paginationReducer: {
    pageCount: number;
    currentPage: number;
    issuesPerPage: 20;
  };
  filtersReducer: string;
};

export type IssueProps = {
  id: number;
  state: string;
  title: string;
  createdAt: Date;
  number: number;
};
