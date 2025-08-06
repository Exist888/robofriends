import React from "react";
import { Card } from "./Card.jsx";

export const CardList = ({ robots }) => {
    const cardsArray = robots.map((robot, index) => {
        return (
            <Card 
                key={index} 
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email}
            />
        );
    });

    return (
        <section className="card-list-section">
            {cardsArray}
        </section>
    );
}