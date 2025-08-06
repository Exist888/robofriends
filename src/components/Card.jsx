import React from "react";

export const Card = ({ id, name, email }) => {
    return (
        <article className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img src={`https://robohash.org/coolrobot${id}`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </article>
    );
}