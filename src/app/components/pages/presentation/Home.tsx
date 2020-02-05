import React, { Fragment, useEffect } from 'react';
import { SearchBar } from '../../molecules';
import Library from '../../organismes/Library';
import { Book, Offer } from '../../../models/';

export interface IHomeProps {
  items: any;
  offers: Offer[];
  books: Book[];
  search: string;
}
const Home = (props: IHomeProps & { getBooks: () => void; getOffers: (items: any[]) => void }) => {
  const { books, getBooks } = props;

  useEffect(() => {
    getBooks();
  }, [books, getBooks]);

  return (
    <Fragment>
      <SearchBar />
      <Library items={books} />
    </Fragment>
  );
};
export default Home;
