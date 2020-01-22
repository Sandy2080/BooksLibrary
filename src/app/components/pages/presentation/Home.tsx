import React, { Fragment, useEffect, useCallback } from "react";
import Library from "../../organismes/Library";
import SearchBar from "../../molecules/SearchBar"
import { Book } from "../../../models/Book";
import { Offer } from "../../../models/Offer";

const Home = (
  props: { items: any; offers: Offer[]; books: Book[], search: string } & 
  { getBooks: () => void; 
    getOffers: (items: any[]) => void; 
  }) => {
  const { items, books, getOffers, getBooks } = props;
  const loadBooks = useCallback(() => getBooks(), [getBooks]);
  const loadOffers = useCallback(() => getOffers(items), [items, getOffers]);

  useEffect(() => {
   loadBooks()
   loadOffers()
  }, [loadOffers, loadBooks]);

  return (
    <Fragment>
      <SearchBar />
      <Library items={books} />
    </Fragment>
  );
};
export default Home;
