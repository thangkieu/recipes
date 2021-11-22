import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public photoUrl: string,
    public ingredients: string[],
    public directions: string
  ) {}
}
