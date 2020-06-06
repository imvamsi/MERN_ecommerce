import React from 'react'

const Alerts = (props) => {
    console.log(props);
    return ( 
       props.data !== null && <div className={`alert alert-${props.data.type}`} role="alert">
            {props.data.msg}
        </div>
        
    )
}

export default Alerts
