import React from 'react';
import './Car.css'
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
<div className="Car">
    <h3>{props.name} - {props.year}</h3>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    {/* <button onClick={props.clickHandle}>Click</button> */}
    <button onClick={props.onDelete}>Delete</button>

</div>
)