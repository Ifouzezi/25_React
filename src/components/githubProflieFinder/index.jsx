import { useEffect, useState } from "react";
import User from "./userCard";

const GithubProfile = () => {
    const [userName, setUserName] = useState('Ifouzezi');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchGithubUserData() {
        setLoading(true);
        setError(null); // Reset any previous error
        setUserData(null); // Reset previous user data

        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);

            if (!res.ok) {
                throw new Error(`User not found`);
            }

            const data = await res.json();
            setUserData(data);
            console.log(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit() {
        fetchGithubUserData(); // Fetch user data when the search button is clicked
    }

    useEffect(() => {
        fetchGithubUserData(); // Fetch initial data when the component mounts
    }, []);

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
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
            {userData && <User user={userData} />}
        </div>
    );
};

export default GithubProfile;
