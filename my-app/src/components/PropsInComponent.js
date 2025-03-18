import React from 'react';

function PropsInComponent(props) {
    return (
        <div className="Component">
            <h5 className="Component-Header">Props In Component</h5>
            <p className="Component-Content">I am a Component containing Property = <span className="Special">{props.property}</span></p>
        </div>
    );
}

export default PropsInComponent;