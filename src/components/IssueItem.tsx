import { memo } from "react";
import "../styles/issueItem.scss";

export type IssueItemProps = {
  key?: number;
  title: string;
  state: string;
  createdAt: Date;
};

export const formatDate = (date: Date) => {
  return date.toString().substring(0, 10).replaceAll("-", "/");
};

export const IssueItem = memo(function IssueItem({
  title,
  state,
  createdAt,
}: IssueItemProps) {
  return (
    <div className="issue">
      <span className="issue__description">{title}</span>
      <span className="issue__state">{state}</span>
      <span className="issue__date">{formatDate(createdAt)}</span>
    </div>
  );
});
