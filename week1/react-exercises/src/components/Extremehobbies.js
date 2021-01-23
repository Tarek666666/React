export function HobbiesList(props) {
    // const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing" , "Swimming"]; ==> i added this variable as a prop in the main App function.
    return (
        <div className='HobbiesList'>
            <h1>{props.title}</h1>
            {props.hobbies.map((hobby, index) => {
                return <Hobby hobby={hobby} key={index}></Hobby>;
            })}
        </div>
    );
}
export function Hobby(props) {
    return (
        <div className='Hobbies'>
            <p>{props.hobby}</p>
        </div>
    );
}
