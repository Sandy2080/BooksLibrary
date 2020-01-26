import * as Service from './service';
import * as MOCKS from "../utils/mocks";
const { Endpoint, buildURL } = Service
const { Book, Offer } = Endpoint
const { data } = MOCKS;
const { items } = data;

describe("build URL with Book Endpoint", () => {
  it("the url is built correctly ", () => {
    const URL = buildURL(Book, []);
    expect(URL).toBe("http://henri-potier.xebia.fr/books");
  });
});

describe("build URL with Offer Endpoint", () => {
  it("the url is built correctly ", () => {
    let isbns = items.map(item => item.details.isbn);
    const URL = buildURL(Offer, isbns);
    expect(URL).toBe(
      "http://henri-potier.xebia.fr/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861/commercialOffers"
    );
  });
});





