import { connect } from "react-redux";
import { fetchBooks, fetchOffers } from "../../../api";
import { Book } from "../../../models"
import Home from "../presentation/Home";

const showFiltered = (input: string, books: Book[]) => {
  if (!input.length) { return }
   return books.filter((item: any) => {
      const itemData = item.title.toLowerCase(), textData = input.toLowerCase()
      return itemData.indexOf(textData) > -1
   })
} 
const mapStateToProps = (state: any) => ({
  search: state.visibilityFilterReducer.text,
  items: state.shoppingCartReducer.items,
  books: state.visibilityFilterReducer.option === "SHOW_ALL" ? state.bookstoreReducer.books : showFiltered(state.visibilityFilterReducer.text, state.bookstoreReducer.books)
});
const mapDispatchToProps = (dispatch: any) => ({
  getBooks: () => fetchBooks(),
  getOffers: (items: any[]) => fetchOffers(items),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
