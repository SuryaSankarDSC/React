import React,{ Component } from "react";

class StateClassCom extends Component
{
    state={
        color:"Yellow",
        price:220
    }
    handleChange=()=>{this.setState({color:"Pink"})}
    render()
    {
        return(
            <div>
                <h1>The color I have selected is {this.state.color} the price is {this.state.price}</h1>
                <button onClick={this.handleChange}>change color</button>
                </div>
        )
    }
}
export default StateClassCom;