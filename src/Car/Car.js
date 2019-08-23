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

export default (props) => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4) {
        inputClasses.push('bold')
    }

    return (
        <div className="Car">
            <h3>{props.name} - {props.year}</h3>
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />
            {/* <button onClick={props.clickHandle}>Click</button> */}
            <button onClick={props.onDelete}>Delete</button>

        </div>
    )
}