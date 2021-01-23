export function Guarantee({src , title , desc}) {
    return (
        <div className='service'>
            <h2>{title}</h2>
           <img src={src} alt={title} />
           <p>{desc}</p>
        </div>
    );
}