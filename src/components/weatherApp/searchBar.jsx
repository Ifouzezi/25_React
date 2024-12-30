import './styles.css';

const SearchBar = ({ search, setSearch, handleSearch }) => {
    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Enter city"
                className="city-search"
                name='search'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <button onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;