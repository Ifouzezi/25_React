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
            />
            <button onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;