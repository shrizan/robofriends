import React, { Component } from 'react'

export default class ComponentErrorBoundry extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError:true})
        console.log(error)
        console.log(info)
    }
    

    render(){
        return this.state.hasError?(<h1>Oops, That is not good</h1>):this.props.children
    }

}
