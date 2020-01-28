export class Book {
  constructor(obj: any) {
    return {
      ...obj,
      synopsis: obj.synopsis[0],
    };
  }
}
