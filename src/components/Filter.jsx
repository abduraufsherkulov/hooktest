import React, { Component } from 'react';


const Filter = (props) => {
    const {setGender} = props.gender
    return (
        <div>
            <input type="radio" name="gender" id="" value="male" onChange={(e)=>setGender(e.target.value)}/>Male
            <input type="radio" name="gender" id="" value="female" onChange={(e)=>setGender(e.target.value)}/>Female
        </div>
    );
}

export default Filter;