import React from 'react';

const Displayer = React.memo(props => {
    const {name, surname, gender, photo} = props.country.c;
    return (
        <div style={{border: "1px solid red"}}>
            <img src={photo} />
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>gender: {gender}</div>
        </div>
    );
});

export default Displayer;