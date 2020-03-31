import React from "react"


function ConcatCard(props) {

    return(
        <dev>

            <img src={props.imgUrl} alt="hi" height="30%" width="30%"/>
            <h3>{props.name}</h3>
            <p>Place: {props.place}</p>
            <p>Describe: {props.describe}</p>
        </dev>
    )

}

export default  ConcatCard
