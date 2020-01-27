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
const mapStateToProps = (state: any) =>  {
  const { items } = state.shoppingCartReducer 
  const { text, option } = state.visibilityFilterReducer
  const { books } = state.bookstoreReducer
  return {
    search: text,
    items: items,
    books: option === "SHOW_ALL" ? books : showFiltered(text, books)
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  getBooks: () => fetchBooks(),
  getOffers: (items: any[]) => fetchOffers(items),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
