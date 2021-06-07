import { memo } from "react";
import { IssueProps } from "../types/types";
import { IssueItem } from "./IssueItem";
import { Link } from "react-router-dom";
import "../styles/issueList.scss";

type IssueListProps = {
  currentIssues: Array<IssueProps> | null;
};

export const IssueList = memo(function issueList({
  currentIssues,
}: IssueListProps) {
  return (
    <div className="issueList__container">
      <div className="header">
        <span className="header__description">Description</span>
        <span className="header__state">State</span>
        <span className="header__date">Date</span>
      </div>
      {currentIssues?.map((item: IssueProps) => (
        <Link
          key={item.number}
          style={{ textDecoration: "none" }}
          to={`/issues/${item.number}`}
        >
          <IssueItem
            key={item.id}
            title={item.title}
            state={item.state}
            createdAt={item.createdAt}
          />
        </Link>
      ))}
    </div>
  );
});
