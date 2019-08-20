import React from 'react';

// function Car() {
//     return <h2>Car component</h2>
// }

// const car = () =>{
//     return(
//         <h2>Car component</h2>
//     )
// }

// const car = () => <h2>Car component</h2>

export default (props) => (
<div>
    <h3>{props.name} - {props.year}</h3>
</div>
)