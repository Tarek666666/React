export function Search({ handleCityName, cityName }) {
    return (
        <>
            <input
                type='text'
                placeholder='Search City'
                className='searchBar'
                onChange={handleCityName}
                value={cityName}
            />
            <input type='submit' value='Search' className='submitBtn' />
        </>
    );
}
