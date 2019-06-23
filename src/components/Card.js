import React from "react";
import "./Card.css"


const Card = ({props})=>{
    return(
        <div className="tc">
            <div className="card container bs3">
                <button className="pa3 grow ma2" onClick={props.press} >GENERATE</button><br/>
                <ul className="form">
                    <li>
                        <label htmlFor="name">Name:</label>
                        <input type="text" value={`${props.data.name?props.data.name:""}`} readOnly/><br/>
                    </li>
                    <li>
                        <label htmlFor="height">Height:</label>
                        <input type="text" value={`${props.data.height?props.data.height+" cm":""}`} readOnly/><br/>
                        </li>
                    <li>
                        <label htmlFor="hair color">Hair Color:</label>
                        <input type="text" value={`${props.data.hair_color?props.data.hair_color:""}`} readOnly/><br/>
                    </li>
                    <li>
                        <label htmlFor="gender">Gender:</label>
                        <input type="text" value={`${props.data.gender?props.data.gender:""}`} readOnly/><br/>
                    </li>
                    <li>
                        <label htmlFor="weight">Weight:</label>
                        <input type="text" value={`${props.data.mass?props.data.mass+" kg":""}`} readOnly/><br/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;