export type Gist = {
  description: string | null;
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
    };
  };
  node_id: string;
};
