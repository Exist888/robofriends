import React, { Component } from "react";
import { SearchBox } from "../components/SearchBox.jsx";
import { CardList } from "../components/CardList.jsx";
import { Scroll } from "../components/Scroll.jsx";

// Legacy React: class-based component with state and lifecycle methods
export class App extends Component {
    constructor() {
        super()
        // Initialize component state with an empty robots list and search input
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    // Lifecycle method automatically called by React after component mounts
    // Will be replaced with useEffect() in modern React
    componentDidMount() {
        // Fetch user data and update state
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    // Event handler passed to SearchBox - triggered when user types in search input
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;

        // Filter robots based on the search input
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        // If no robots loaded yet, show loading - otherwise, render main content
        if (filteredRobots.length === 0) {
            return <h1 className="tc h1">Loading</h1>
        } else {
            return (
                <div className="tc">
                    <Scroll>
                        <header>
                            <h1 className="h1">RoboFriends</h1>
                            <SearchBox searchChange={this.onSearchChange}/>
                        </header>
                    </Scroll>
                    <CardList robots={filteredRobots} />
                </div>
            );
        }
    }
}