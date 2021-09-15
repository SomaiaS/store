import {Rating} from "./rating.class";

export class ProductModel {
  title: string = '';
  price: number = 0;
  description: string= '';
  image: string= '';
  category: string = '';
  rating:Rating = new Rating();

}
