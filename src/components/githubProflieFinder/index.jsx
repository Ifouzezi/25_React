import { useEffect, useState } from "react";
import User from "./userCard";
import "./styles.css";

const GithubProfile = () => {
    const [userName, setUserName] = useState('Ifouzezi');
    const [userData, setUserData] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch user data
    async function fetchGithubUserData() {
        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            if (!res.ok) {
                throw new Error("User not found");
            }
            const data = await res.json();
            setUserData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    // Fetch suggestions for autocomplete
    async function fetchSuggestions(query) {
        if (query.trim() === "") {
            setSuggestions([]);
            return;
        }

        try {
            const res = await fetch(`https://api.github.com/search/users?q=${query}`);
            const data = await res.json();
            setSuggestions(data.items || []);
        } catch {
            setSuggestions([]);
        }
    }

    // Handle search submission
    function handleSubmit() {
        fetchGithubUserData();
        setSuggestions([]); // Clear suggestions after submission
    }

    // Handle input changes
    function handleInputChange(event) {
        const query = event.target.value;
        setUserName(query);
        fetchSuggestions(query); // Fetch autocomplete suggestions
    }

    if (loading) {
        return <h1>Loading data, please wait...</h1>;
    }

    return (
        <div className="githubProfileContainer">
            <div className="inputWrapper">
                <input
                    type="text"
                    name="search-by-username"
                    placeholder="Search GitHub Username..."
                    value={userName}
                    onChange={handleInputChange}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                />
                <button className="button" onClick={handleSubmit}>Search</button>

                {/* Autocomplete suggestions */}
                {suggestions.length > 0 && (
                    <ul className="suggestions">
                        {suggestions.map((user) => (
                            <li
                                key={user.id}
                                onClick={() => {
                                    setUserName(user.login);
                                    setSuggestions([]); // Clear suggestions
                                }}
                            >
                                {user.login}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
            {userData && <User user={userData} />}
        </div>
    );
};

export default GithubProfile;
