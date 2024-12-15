function User({ user }) {
    const { avatar_url, followers, following, public_repos, login, name, html_url, bio } = user;

    return (
        <div className="user">
            <div className="avatarWrapper">
                <img src={avatar_url} alt={`${login}'s avatar`} className="avatar" />
            </div>
            <div className="userInfo">
                <h1>{name || login}</h1>
                <h3>{bio}</h3>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                    Visit Profile
                </a>
                <ul>
                    <li><strong>Followers:</strong> {followers}</li>
                    <li><strong>Following:</strong> {following}</li>
                    <li><strong>Public Repositories:</strong> {public_repos}</li>
                </ul>
            </div>
        </div>
    );
}

export default User;
