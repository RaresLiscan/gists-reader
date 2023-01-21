import { Octokit } from "@octokit/core";

const octokit = new Octokit();

export async function getGistsForUser(user: string) {
  try {
    return (await octokit.request(`GET /users/${user}/gists`)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getLatestGists() {
  try {
    return await (
      await octokit.request("GET /gists/public")
    ).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
