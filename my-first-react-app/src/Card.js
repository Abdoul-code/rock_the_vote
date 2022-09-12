import React from "react"

function Card(props){
    return(
        <div>
            <h3>place:{props.place}</h3>
            <h3>price:{props.price}</h3>
            <h3>time:{props.timeToGo}</h3>
        </div>
    )
}

export default Card