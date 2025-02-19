import React from "react";
import clsx from "clsx";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice.js";
import { useSelector, useDispatch } from "react-redux";

function SearchBox() {
    const dispatch = useDispatch();
    const searchText = useSelector((state) => state.filters.text);

    const setSearchText = (text) => {
        dispatch(changeFilter(text));
    };

    return (
        <div className="section">
            <div className="container">
                <p>Find contacts by name</p>
                <input
                    className={clsx(css.SearchBoxField)}
                    name="searchfield"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                ></input>
            </div>
        </div>
    );
}

export default SearchBox;
