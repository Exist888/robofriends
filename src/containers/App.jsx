import React, { useState, useEffect } from "react";
import { SearchBox } from "../components/SearchBox.jsx";
import { CardList } from "../components/CardList.jsx";
import { Scroll } from "../components/Scroll.jsx";

// Modern React: functional component with hooks for state and side effects
export function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState("");

    // useEffect runs once after initial render (componentDidMount equivalent)
    useEffect(() => {
        // Fetch user data and update state
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {setRobots(users)});
    }, []);

    // Event handler passed to SearchBox - triggered when user types in search input
    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

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
                        <SearchBox searchChange={onSearchChange}/>
                    </header>
                </Scroll>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}