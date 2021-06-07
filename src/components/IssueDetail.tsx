import { memo, useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";
import { GET_ISSUE } from "../gql-query/gql-query";
import { useQuery } from "@apollo/react-hooks";
import "../styles/issueDetail.scss";
import { formatDate } from "../components/IssueItem";
export const IssueDetail = memo(function IssueDetail({
  ...props
}: RouteComponentProps) {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [body, setBody] = useState("");
  const [comments, setComments] = useState([]);

  const { data, loading, error } = useQuery(GET_ISSUE, {
    variables: { id: parseInt(id) },
  });

  useEffect(() => {
    if (data) {
      console.log(data.repository.issue.comments.nodes);
      setTitle(data.repository.issue.title);
      setAuthor(data.repository.issue.author.login);
      setCreatedDate(formatDate(data.repository.issue.createdAt));
      setBody(data.repository.issue.body);
      setComments(data.repository.issue.comments.nodes);
    }
  }, [data]);

  if (loading) return <div className="list__loading">Loading...</div>;
  if (error) return <div className="list__error">Error...</div>;

  return (
    <>
      <div className="detail">
        <h4>{title}</h4>
        <p className="author">{author}</p>
        <p>{createdDate}</p>
        <p>{body}</p>
        {comments.map((comment) => {
          <p>{comment}</p>;
        })}
      </div>
    </>
  );
});
