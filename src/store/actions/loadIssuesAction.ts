export const LOAD_ISSUES = "LOAD_ISSUES";
export const LOAD_NEW_ISSUES = "LOAD_NEW_ISSUES";

export const loadIssues = (loadedIssues: []) => ({
  type: LOAD_ISSUES,
  payload: loadedIssues,
});

export const loadNewIssues = (loadedNewIssues: []) => ({
  type: LOAD_NEW_ISSUES,
  payload: loadedNewIssues,
});
