export type Gist = {
  description: string;
  owner: {
    login: string;
  };
  files: {
    [key: string]: {
      filename: string;
      type: string;
      language: string;
      size: number;
    };
  };
};
