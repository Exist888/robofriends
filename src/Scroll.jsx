import React from "react";

export const Scroll = (props) => {
    return (
        <div className="scrollable-component">
            {props.children}
        </div>
    );
}