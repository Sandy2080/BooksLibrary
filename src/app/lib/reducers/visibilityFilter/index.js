import { actions, visibilityFilters } from '../../actions/visibilityFilter';
const { SET_FILTER } = actions;

const initialState = {
  option: visibilityFilters.SHOW_ALL,
  text: '',
};
const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, {
        option: action.payload.option,
        text: action.payload.search,
      });
    default:
      return state;
  }
};
export default visibilityFilterReducer;
