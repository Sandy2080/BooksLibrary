import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, visibilityFilters } from '../../../lib/actions/visibilityFilter'
import { StyledSearchBar } from './styles'
import { Input, InputTheme } from "../../atoms"

const SearchBar = () => {
    const dispatch = useDispatch()
    const { SHOW_ALL, SHOW_FILTERED } = visibilityFilters
    const handleInputChange = input => dispatch(setFilter(!input.length ? SHOW_ALL : SHOW_FILTERED, input))
    const attributes = { 'placeholder': 'Search ...', 'type': 'text', 'aria': 'search' }
    return (
    <StyledSearchBar>
        <Input.LARGE 
            classNames="searchInput"
            theme={InputTheme.ROUNDED}
            action={e => handleInputChange(e.target.value)}
            {...attributes}>
        </Input.LARGE> 
    </StyledSearchBar>)
 }
export default SearchBar;
