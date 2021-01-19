export function Guarantee({src , title , desc}) {
    return (
        <div className='service'>
            <h1>{title}</h1>
           <img src={src} alt={title} />
           <p>{desc}</p>
        </div>
    );
}