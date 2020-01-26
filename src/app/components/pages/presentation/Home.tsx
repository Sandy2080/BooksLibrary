import React, { Fragment, useEffect, useCallback } from "react";
import { SearchBar } from "../../molecules"
import { Library } from "../../organismes";
import {
  Book, 
  Offer
} from "../../../models/"

export interface IHomeProps { 
  items: any; 
  offers: Offer[]; 
  books: Book[], 
  search: string 
}
const Home = (props: IHomeProps & 
  { getBooks: () => void; 
    getOffers: (items: any[]) => void; 
  }) => {
  const { items, books, getOffers, getBooks } = props;
  const loadBooks = useCallback(() => getBooks(), [getBooks]);
  const loadOffers = useCallback(() => getOffers(items), [items, getOffers]);
  
  useEffect(() => {
   loadBooks()
  }, [loadOffers, loadBooks]);

  return (
    <Fragment>
      <SearchBar />
      <Library items={books} />
    </Fragment>
  );
};
export default Home;
