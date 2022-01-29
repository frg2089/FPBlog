
export interface ITree {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
}

export interface ITreeResult {
  sha: string;
  url: string;
  tree: ITree[];
  truncated: boolean;
}
