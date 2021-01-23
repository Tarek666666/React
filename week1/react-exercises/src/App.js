import "./App.css";
import { HobbiesList } from "./components/Extremehobbies";
import { Guarantee } from "./components/PerfectCustomerService";
import {Counter } from './components/itsHigherThan10';


import freeShippingPhoto from "./components/f-delivery.png";
import onlineSupportPhoto from "./components/chat.png";
import moneyBack from "./components/coin.png";



function App() {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing", "Swimming"];
    return (
        <div className='App'>
            <HobbiesList hobbies={hobbies} title={"Hobbies List : "} />

            <div className="services">
                <h1>Our Services</h1>
                <Guarantee src={freeShippingPhoto} title={'Free Shipping'} desc={'our best delivery services are free!!'} />
                <Guarantee src={onlineSupportPhoto} title={'Online support'} desc={'24/7 Online support for out customers'} />
                <Guarantee src={moneyBack} title={'Money Back'} desc={'100% money back if the customer was not satisfied '} />
            </div>
            <div className="Counter">
               <Counter/>
            </div>
        </div>
    );
}

export default App;
