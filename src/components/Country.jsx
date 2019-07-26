import React, {useEffect} from 'react';

const Country = React.memo(props => {
    const {country, setCountry} = props.country;
    console.log(country);
    return(
        <select name="" id="" onChange={(e)=>setCountry(e.target.value)}>
            <option value="germany">Germany</option>
            <option value="united states">United States</option>
            <option value="france">France</option>
        </select>
    )
});

export default Country;