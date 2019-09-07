export interface IMonth {
  name: string;
  placement: string;
  element: string;
  design?: string;
  sacredMoments?: string;
  color?: string;
  artistCommentary?: string;
  url: string;
}

export interface IMonthMap<IMonth> {
  [key: string]: IMonth;
}
