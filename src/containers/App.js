import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CounterButton from '../components/CounterButton';
import { setSearchField, requestRobots } from '../Actions'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        Robots: state.requestRobots.Robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
        //onRequestRobots: () => requestRobots(dispatch)
    }
}

class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         Robots: [],
    //     }
    // }

    render() {

        const searchedRobots = this.props.Robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })

        if (this.props.isPending) {
            return (
                <div className='tc f1'>
                    <h1>Loading...</h1>
                </div>
            )
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <CounterButton />
                    <SearchBox searchChange={this.props.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList Robots={searchedRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }

    }

    componentDidMount() {
        this.props.onRequestRobots()
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)