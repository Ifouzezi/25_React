import { useEffect, useState } from "react";
import "./styles.css";

const Suggestions = ({ suggestions, onSelect }) => {
  return (
    <ul className="suggestions-list">
      {suggestions.length > 0 ? (
        suggestions.map((user, index) => (
          <li key={index} onClick={() => onSelect(user)}>
            {user}
          </li>
        ))
      ) : (
        <li className="no-results">No results found</li>
      )}
    </ul>
  );
};

const AutoCompleteSearch = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);
    setShowDropdown(query.length > 0);

    if (query.length > 0) {
      const filtered = users.filter((user) =>
        user.toLowerCase().includes(query)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers([]);
    }
  };

  const handleSelectUser = (user) => {
    setSearchTerm(user);
    setShowDropdown(false);
  };

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError("Failed to fetch users");
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="autocomplete-container">
      <input
        value={searchTerm}
        type="text"
        placeholder="Search users here..."
        name="search-by-username"
        onChange={handleChange}
        onFocus={() => setShowDropdown(searchTerm.length > 0)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />
      {showDropdown && (
        <Suggestions
          suggestions={filteredUsers}
          onSelect={handleSelectUser}
        />
      )}
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default AutoCompleteSearch;
