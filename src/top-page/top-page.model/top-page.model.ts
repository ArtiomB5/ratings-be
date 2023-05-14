export enum TopLevelCategory {
  Questions,
  Exercises,
  Videos,
}

export class TopPageModel {
  _id: string;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
}
