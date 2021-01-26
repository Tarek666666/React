import { useState, useEffect } from "react";
import { Button } from "./ex1getAFriend";
import "../App.css";

const BASE_URL = "https://official-joke-api.appspot.com/random_joke";

export function RandomJoke() {
    const [joke, setJoke] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(BASE_URL)
            .then((res) => {
                if (!res.ok) {
                    setError(true);
                    setLoading(false);
                }
                return res.json();
            })
            .then((data) => {
                setJoke(data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
            });
    }, []);

    return (
        <div>
            {isLoading && !hasError && <p>Loading a joke ..... </p>}
            {!isLoading && !hasError && <Joke joke={joke} />}
            {hasError && <p>Ooops Something went wrong </p>}
        </div>
    );
}

function Joke({ joke }) {
    return (
        <div>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </div>
    );
}
