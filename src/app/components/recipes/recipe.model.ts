export class Recipe {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public photourl: string,
    public ingredients: string[],
    public directions: string
  ) {}
}
