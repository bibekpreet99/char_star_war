import React, { Component } from "react";
import Head from "../components/Head"
import "./App.css";
import Card from "../components/Card"

class App extends Component{
    constructor(){
        super()
        this.state = {
            idObj: {}
        }
    }

        onButtonPress = (event)=>{
            fetch(`https://swapi.co/api/people/${Math.floor((Math.random() * 88) + 1)}/`)
            .then(response=>response.json())
            .then(obj=>{
                this.setState({
                    idObj: Object.assign({}, this.state, obj)
                })
            }
            )
            .catch(err=>console.log(err))
        }


    render(){
        const { idObj } = this.state
        return(
            <div className="tc">
                <Head/>
                <Card props={{press: this.onButtonPress, data: idObj}}/>
            </div>
        )
    }
}

export default App