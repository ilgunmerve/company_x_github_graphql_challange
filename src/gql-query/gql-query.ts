import gql from "graphql-tag";

export const GET_ISSUE = gql`
  query GetIssue($id: Int!) {
    repository(owner: "reactjs", name: "reactjs.org") {
      issue: issue(number: $id) {
        title
        createdAt
        body
        author {
          login
        }
        comments(first: 10) {
          nodes {
            body
          }
        }
      }
    }
  }
`;

export const GET_ISSUE_LIST = gql`
  query GetRepositoryWithIssues($after: String, $states: [IssueState!]) {
    repository(owner: "reactjs", name: "reactjs.org") {
      issues(
        first: 100
        after: $after
        states: $states
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          id
          number
          title
          state
          author {
            avatarUrl
            login
          }
          createdAt
        }
        pageInfo {
          endCursor
        }
      }
    }
  }
`;
