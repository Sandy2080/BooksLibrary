export class Book {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synopsis: string;
  constructor(obj: any) {
      return this.isbn = obj.isbn,
      this.title = obj.title,
      this.price = obj.price,
      this.cover = obj.cover,
      this.synopsis = obj.synopsis[0]
  }
}   
