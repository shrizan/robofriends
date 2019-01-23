import React from 'react'
import { connect } from 'react-redux'
import CardList from './../components/CardList'
import SearchBox from './../components/SearchBox'
import './App.css'
import Scroll from './../components/Scroll'
import ErrorBoundry from './../components/ComponentErrorBoundry'
import { setSearchField, requestRobots } from './../Actions'
import Header from './../components/Header'


class  App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            robots:[],
        }
    }

    componentDidMount() {
        this.props.onRequestRobots()
    }

    render(){

        const filteredRobots=this.props.robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase())
        })
        return this.props.isPending?<h1>loading....</h1>:
        (
            <div className="tc">
                <Header/>
                <SearchBox searchChnage={this.props.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        searchField:state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}

const mapDispatchToProps=(dispatch)=>{
return {
    onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>dispatch(requestRobots())
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)