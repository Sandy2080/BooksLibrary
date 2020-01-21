import React, { Fragment, useEffect, useState } from "react";
import Library from "../../organismes/Library";
import SearchBar from "../../molecules/SearchBar"
import { Book } from "../../../models/Book";
import { Offer } from "../../../models/Offer";

const Home = (
  props: { items: any; offers: Offer[]; books: Book[], search: string } & 
  { getBooks: () => void; 
    getOffers: (items: any[]) => void; 
  }) => {
  const loadBooks = () => props.getBooks();
  const loadOffers = () => props.getOffers(items);
  const { items, books } = props;

  useEffect(() => {
   loadBooks()
   loadOffers()
  }, []);

  return (
    <Fragment>
      <SearchBar />
      <Library items={books} />
    </Fragment>
  );
};
export default Home;
