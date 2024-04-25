// apiService.ts

import { type Task, type Issue, type NewIssue } from "~/types";

export type PlanStatus = {
  statusDescription: string;
  currentPlanStep: number;
  isMostRecentStepCompleted: boolean;
};

export type RepoResponse = {
  repos: string[];
  message: string;
};

export type IssueResponse = {
  issues: Issue[];
  message: string;
};

/**
 * Fetch the status of a specific task.
 * @param task The task to fetch the status for.
 * @returns A promise that resolves with the status data.
 */
export const fetchPlanStatus = async (task: Task): Promise<PlanStatus> => {
  const response = await fetch(`/api/dashboard/plan-status/${task.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch plan status: ${response.statusText}`);
  }

  return (await response.json()) as PlanStatus;
};

/**
 * Fetch all repositories.
 * @returns A promise that resolves with an array of repository names.
 */
export const fetchRepos = async (): Promise<string[]> => {
  const response = await fetch("/api/jacob/repos", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch repos: ${response.statusText}`);
  }
  const data = (await response.json()) as RepoResponse;
  return data.repos;
};

/**
 * Fetch issues for a given repository.
 * @param repo The repository name.
 * @returns A promise that resolves with an array of issues.
 */
export const fetchIssues = async (repo: string): Promise<Issue[]> => {
  const response = await fetch(`/api/jacob/issues?repo=${repo}`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch issues for repo ${repo}: ${response.statusText}`,
    );
  }
  const data = (await response.json()) as IssueResponse;
  return data.issues;
};

/**
 * Update an existing issue.
 * @param issue The issue to update.
 * @returns A promise that resolves with the updated issue.
 */
export const updateIssue = async (issue: Issue): Promise<Issue> => {
  const response = await fetch(`/api/jacob/update-issue/${issue.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(issue),
  });
  if (!response.ok) {
    throw new Error(
      `Failed to update issue ${issue.id}: ${response.statusText}`,
    );
  }
  return response.json();
};

/**
 * Create a new issue in a repository.
 * @param newIssue The new issue details.
 * @returns A promise that resolves with the newly created issue.
 */
export const createIssue = async (newIssue: NewIssue): Promise<Issue> => {
  const response = await fetch(`/api/jacob/create-issue`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newIssue),
  });
  if (!response.ok) {
    throw new Error(`Failed to create new issue: ${response.statusText}`);
  }
  return response.json();
};
