export function HobbiesList(props) {
    // const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing" , "Swimming"]; ==> i added this variable as a prop in the main App function.
    return (
        <div className='HobbiesList'>
            <h1>{props.title}</h1>
            {props.hobbies.map((hobby, index) => {
                return <Hobbies hobby={hobby} key={index}></Hobbies>;
            })}
        </div>
    );
}
export function Hobbies(props) {
    return (
        <div className='Hobbies'>
            <p>{props.hobby}</p>
        </div>
    );
}
