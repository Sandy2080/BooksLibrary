const Constants = {
  BASE_URL: 'http://henri-potier.xebia.fr',
};
export enum Endpoint {
  Book = 'books',
  Offer = 'commercialOffers',
}
//returns a string to build the URL with parameters if applicable
function uriParams(parameters: string[]) {
  return parameters.map(param => param).join(',');
}
const buildURL = (endpoint: Endpoint, parameters: string[]) => {
  const ISBNs = uriParams(parameters);
  switch (endpoint) {
    case Endpoint.Book:
      return `${Constants.BASE_URL}/${Endpoint.Book}`;
    case Endpoint.Offer:
      return `${Constants.BASE_URL}/${Endpoint.Book}/${ISBNs}/${Endpoint.Offer}`;
    default:
      return `${Constants.BASE_URL}/${Endpoint.Book}`;
  }
};

export class Request {
  url: string;
  constructor(endpoint: Endpoint, parameters: string[]) {
    this.url = buildURL(endpoint, parameters);
  }
  get = () => {
    return new Promise((onSuccess, onFailure) => {
      fetch(this.url)
        .then((response: { ok: any; statusText: string | undefined; json: () => unknown }) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          onSuccess(response.json());
        })
        .catch((e: any) => onFailure(e));
    });
  };
}
