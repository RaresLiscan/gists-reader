import { ForkApiResponse } from "./fork-api-response";

export type Gist = {
  description: string | null;
  id: string;
  forks_url: string;
  forksArray?: ForkApiResponse[];
  owner?: {
    login: string;
    avatar_url: string;
  };
  files: {
    [key: string]: {
      filename?: string;
      type?: string;
      language?: string;
      size?: number;
      raw_url?: string;
    };
  };
  node_id: string;
};
