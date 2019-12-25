import React from 'react';

// Creates a scrollable component within the page
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid pink', height: '800px'}}>
            {props.children}
        </div>
    );
};


export default Scroll;