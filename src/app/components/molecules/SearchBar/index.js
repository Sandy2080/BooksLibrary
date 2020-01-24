import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, visibilityFilters } from '../../../lib/actions/visibilityFilter'
import { StyledSearchBar } from './styles'
import Input, { InputTheme } from "../../atoms/input"

const SearchBar = () => {
    const dispatch = useDispatch()
    const { SHOW_ALL, SHOW_FILTERED } = visibilityFilters
    const handleInputChange = input => dispatch(setFilter(!input.length ? SHOW_ALL : SHOW_FILTERED, input))

    return (
    <StyledSearchBar >
    <form className="form-inline row"
        onSubmit={e => e.preventDefault()}>
        <Input.LARGE 
            classNames="col-sm-12 searchInput"
            theme={InputTheme.ROUNDED}
            type="text"
            placeholder="Search ..."
            aria="Search"
            action={handleInputChange}
        >
        </Input.LARGE> 
    </form>
    </StyledSearchBar>)
 }

export default SearchBar;
