import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, visibilityFilters } from '../../lib/actions/visibilityFilter'
import { StyledSearchBar } from './styles'

const SearchBar = () => {
    const dispatch = useDispatch()
    const { SHOW_ALL, SHOW_FILTERED } = visibilityFilters
    const handleInputChange = input => dispatch(setFilter(!input.length ? SHOW_ALL : SHOW_FILTERED, input))

    return (
    <StyledSearchBar >
    <form className="form-inline row"
    onSubmit={e => e.preventDefault()}>
        <input
            className="form-control  form-control-lg col-sm-12"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => handleInputChange(e.target.value)} />
                
    </form>
    </StyledSearchBar>)
 }

export default SearchBar;
