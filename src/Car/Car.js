import React from 'react';
// import './Car.css'
// css modules allows to incapsulate styles and avoid 
// style classes names overlaping.
// In react 16+ we don`t need to use eject and modify webpack configs
// we only need to to use name of css files like MyName.module.css
// and import and use style classes as show below 
import styles from './Car.module.css'
import Radium from 'radium'
import withClass from '../hoc/withClass'
import classes from './Car.module.css';

class Car extends React.Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        if (this.props.index ===0){
            this.inputRef.current.focus()
        }

    }

    render() {
        const inputClasses = [styles.input]

        if (this.props.name !== '') {
            inputClasses.push(styles.green)
        } else {
            inputClasses.push(styles.red)
        }

        if (this.props.name.length > 4) {
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
                <h3>{this.props.name} - {this.props.year}</h3>
                <input
                    type="text"
                    ref ={this.inputRef}
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                {/* <button onClick={props.clickHandle}>Click</button> */}
                <button onClick={this.props.onDelete}>Delete</button>

            </div>
        )
    }
}

export default withClass(Car, classes.Car)