import React from 're1act'

//This component can decorate elements in result 
//of render method without adding tag in result DOM
const Auxillary = (props) => {
    return props.children
}

export default Auxillary