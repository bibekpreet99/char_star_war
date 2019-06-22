import React from "react";
import "./Card.css"


const Card = (props)=>{
    return(
        <div className="tc">
            <div className="card container bs3">
                <button className="pa3 grow ma2" onClick={props.props.press} >GENERATE</button><br/>
                <ul className="form">
                    <li>
                        <label htmlFor="name">Name:</label>
                        <input type="text" value={`${props.props.data.name?props.props.data.name:""}`} readOnly/><br/>
                    </li>
                    <li>
                        <label htmlFor="height">Height:</label>
                        <input type="text" value={`${props.props.data.height?props.props.data.height:""}`} readOnly/><br/>
                        </li>
                    <li>
                        <label htmlFor="hair color">Hair Color:</label>
                        <input type="text" value={`${props.props.data.hair_color?props.props.data.hair_color:""}`} readOnly/><br/>
                    </li>
                    <li>
                        <label htmlFor="gender">Gender:</label>
                        <input type="text" value={`${props.props.data.gender?props.props.data.gender:""}`} readOnly/><br/>
                    </li>
                    <li>
                        <label htmlFor="mass">Mass:</label>
                        <input type="text" value={`${props.props.data.mass?props.props.data.mass:""}`} readOnly/><br/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;