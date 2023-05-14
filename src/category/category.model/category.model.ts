export class CategoryModel {
  _id: string;
  images: { [key: string]: string };
  question: string;
  answer: string;
  tags: string;
  comments: number;
}
