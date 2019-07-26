import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';
import Displayer from './Displayer';
import Filter from './Filter';

function Binder() {
    const [name, setName] = useState([{
    }]);
    const [country, setCountry] = useState('germany');
    const [gender, setGender] = useState('male');
    useEffect(()=>{
        axios.get(`https://uinames.com/api/?amount=25&ext&region=${country}&gender=${gender}`)
        .then(function (response) {
            // handle success
            setName(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }, [country, gender])
    return(
        <React.Fragment>
            <Country country={{country, setCountry}}/>
            <Filter gender={{gender, setGender}} />
            {name.map((c,i)=>(
                <Displayer key={i} country={{c, setName}}/>
            ))}
        </React.Fragment>
    )
}

export default Binder;