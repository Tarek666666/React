import { useState, useEffect } from "react";
import { Button } from "./ex1getAFriend";
import "../App.css";

const BASE_URL = "https://dog.ceo/api/breeds/image/random";

export function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [ButtonClickCount, setButtonClickCount] = useState(0);

    const getDogPhoto = async function () {
        try {
            setisLoading(true);
            const dogPhotoResponse = await fetch(BASE_URL);
            const dogPhotoResponseJson = await dogPhotoResponse.json();

            setDogPhotos((prev) => [...prev, dogPhotoResponseJson]);
            setisLoading(false);
        } catch (error) {
            setisLoading(false);
            setError(true);
            console.log(error);
        }
    };

    const buttonClicked = function () {
        setButtonClickCount((prev) => prev + 1);
    };

    useEffect(() => {
        return () => {
            getDogPhoto();
        };
    }, [ButtonClickCount]);

    return (
        <div>
            {!isLoading && !hasError && dogPhotos.length == 0 && (
                <p>Get your first dog by clicking the button!</p>
            )}
            {isLoading && <p>Loading ............... </p>}
            {!hasError &&
                !isLoading &&
                dogPhotos.map((photo, index) => <DogPhoto photo={photo} key={index + 1} />)}
            {hasError && <p>There is something went wrong .. !!</p>}
            <Button title={"Get A Dog"} fetchData={buttonClicked} />
        </div>
    );
}

function DogPhoto({ photo }) {
    return (
        <div>
            <img src={photo.message} className='dogPhoto' />
        </div>
    );
}
