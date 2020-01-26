import * as Service from './service';
import * as MOCKS from "../utils/mocks";
const { Endpoint, Request } = Service
const { Book, Offer } = Endpoint
const { data } = MOCKS;
const { items } = data;

describe("build URL with Endpoint Book", () => {
  it("the url is built correctly ", () => {
    let request = new Request(Book, []);
    expect(request.url).toEqual("http://henri-potier.xebia.fr/books");
  });
});
describe("build URL with Endpoint Offer", () => {
  it("the url is built correctly ", () => {
    let isbns = items.map(item => item.details.isbn);
    let URL = new Request(Offer, isbns).url;
    expect(URL).toEqual(
      "http://henri-potier.xebia.fr/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861/commercialOffers"
    );
  });
});





