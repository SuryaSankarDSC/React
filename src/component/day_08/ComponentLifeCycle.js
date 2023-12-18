import React,{Component} from 'react'
export default class ComponentLifeCycle extends Component{
    constructor(props)
    {
        super(props);
        this.state={favColor:"yellow"}
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({favColor:"blue"})},5000)
    }
    shouldComponentUpdate()
    {
        return true
    }
    render()
    {
        return(
            <div>
            <h1>My favorite color is {this.state.favColor}</h1>
            </div>
        )
    }

}