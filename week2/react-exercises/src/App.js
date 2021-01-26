import "./App.css";
import { Friend } from "./components/ex1getAFriend";
import { DogGallery } from "./components/ex2dogGallery";
import { RandomJoke } from "./components/ex3randomJoke";

function App() {
    return (
        <div className='App'>
            <Friend />

            <hr />
            <hr />

            <div>
                <DogGallery />
            </div>

            <hr />
            <hr />

            <div>
                <RandomJoke />
            </div>
        </div>
    );
}

export default App;
