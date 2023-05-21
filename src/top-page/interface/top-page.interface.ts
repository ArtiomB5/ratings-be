import { TopLevelCategory } from '../top-page.model/top-page.model';

export interface IHHData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export interface ITopPageAdvantage {
  title: string;
  description: string;
}

export interface ITopPage extends Document {
  firstCategory: TopLevelCategory;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  hh?: IHHData;
  advantages: ITopPageAdvantage[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
