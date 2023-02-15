import React from 'react'

const Search = () => {
return (
    <div id="search">
        <button type="button" class="close">x</button>
        <form id="contact" action="#" method="get">
            <fieldset>
                <input type="search" name="q" placeholder="SEARCH KEYWORD(s)" aria-label="Search through site content"/>
            </fieldset>
            <fieldset>
                <button type="submit" class="main-button">Search</button>
            </fieldset>
        </form>
    </div>
);
};

export default Search