import { ProductNameTypes } from "../types/type.ts";

export interface IProduct {
  id?: number;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  name: ProductNameTypes;
  label: string;
  type: string;
}

export interface ICategory {
  id: number;
  name: string;
  imageURL: string;
}
