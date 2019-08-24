import React from 'react';
// import './Car.css'
// css modules allows to incapsulate styles and avoid 
// style classes names overlaping.
// In react 16+ we don`t need to use eject and modify webpack configs
// we only need to to use name of css files like MyName.module.css
// and import and use style classes as show below 
import styles from './Car.module.css'
import Radium from 'radium'

const Car = props => {
    const inputClasses = [styles.input]

    if (props.name !== '') {
        inputClasses.push(styles.green)
    } else {
        inputClasses.push(styles.red)
    }

    if (props.name.length > 4) {
        inputClasses.push(styles.bold)
    }

    //inline styles don`t support :hover and other pseudo classes
    //so we can use pseudo classes in css files, or use Radium
    //see last line: export default Radium(Car)
    //also Radium allows to use media-queries
    const style = {
        border: '1px solid',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover': {
            border: '2px solid #aaa',
            cursor: 'pointer'
        }
    }

    return (
        <div className={styles.Car} style={style}>
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


export default Radium(Car)