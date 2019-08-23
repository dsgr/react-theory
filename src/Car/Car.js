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
<div style={{
    border: '1px solid',
    marginBottom: '10px',
    display: 'block',
    padding: '10px',
    boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
    borderRadius: '5px'
}}>
    <h3>{props.name} - {props.year}</h3>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    {/* <button onClick={props.clickHandle}>Click</button> */}
    <button onClick={props.onDelete}>Delete</button>

</div>
)