import { Octokit } from "@octokit/core";
import { Gist } from "../types/gists-api-response";
import { ForkApiResponse } from "../types/fork-api-response";

const octokit = new Octokit();

export async function getGistsForUser(user: string) {
  try {
    const userGists = (
      await octokit.request(`GET /users/${user}/gists`, { username: user })
    ).data;

    if (!userGists) {
      return [];
    }

    const gistsFullData: Gist[] = await userGists.map(async (gist: Gist) => {
      const forks: ForkApiResponse[] = await getForksForGist(gist.id);
      return {
        ...gist,
        forksArray: forks,
      };
    });

    return Promise.all(gistsFullData);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getLatestGists() {
  try {
    return (await octokit.request("GET /gists/public")).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getForksForGist(gistId: string) {
  return await (
    await octokit.request(`GET /gists/${gistId}/forks`)
  ).data;
}
