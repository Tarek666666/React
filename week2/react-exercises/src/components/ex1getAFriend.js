import { useState, useEffect } from "react";
import "../App.css";

const BASE_URL = "https://www.randomuser.me/api?results=1";

export function Friend() {
    const [friend, setFriend] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [buttonClickCount, setButtonClickCount] = useState(0);

    const getFriend = function () {
        setLoading(true);
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                setFriend(data.results[0]);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
            });
    };

    const buttonClicked = function () {
        setButtonClickCount((prev) => prev + 1);
    };

    useEffect(() => {
        getFriend();
    }, [buttonClickCount]);

    return (
        <div>
            {isLoading && <p>Fetching the Data ... </p>}
            {!hasError && !isLoading && friend.name && <FriendProfile friendData={friend} />}

            {hasError && <p>Failed To fetch the data, something went wrong</p>}
            <Button fetchData={buttonClicked} title={"Get Friend"} />
        </div>
    );
}

export function Button({ fetchData, title }) {
    return (
        <button onClick={fetchData} className='getFriendBtn'>
            {title}
        </button>
    );
}

export function FriendProfile({ friendData }) {
    return (
        <div>
            <h1>Friend's Information</h1>

            <ul className='friendsUl'>
                <li>
                    {" "}
                    <span>FullName:</span>{friendData.name.first} {friendData.name.last}
                </li>
                <li>
                    <span>Email:</span> {friendData.email}
                </li>
                <li>
                    <span>Phone:</span> {friendData.phone}
                </li>
                <li>
                    <span>Location:</span> {friendData.location.country}{" "}
                </li>
                <li>
                    <span>Adress:</span> {friendData.location.street.name} ,{" "}
                    {friendData.location.street.number}
                </li>
            </ul>
        </div>
    );
}
