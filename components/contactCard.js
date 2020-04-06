import React from "react"


function ConcatCard(props) {

    return(
        <dev>

            <img src={props.imgUrl} alt="hi" height="30%" width="30%"/>
            <h3 style = {{display: props.name && "none"}}>{props.name}</h3>
            {/* <h3 style = {{display: props.name ? "block" : "none"}}>{props.name}</h3> */}
            <p>Place: {props.place}</p>
            <p>Describe: {props.describe}</p>
            <hr/>
        </dev>
    )

}

export default  ConcatCard
