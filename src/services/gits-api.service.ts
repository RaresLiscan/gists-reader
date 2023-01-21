import { Octokit } from "@octokit/core";
import { Gist } from "../types/gists-api-response";

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
    return (await octokit.request("GET /gists/public")).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
