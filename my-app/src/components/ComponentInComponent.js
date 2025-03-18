import React from 'react';

function ChildComponent() {
    return <span className="Special">I am a Child Component</span>;
}

function ParentComponent() {
    return (
        <div className="Component">
            <h5 className="Component-Header">Component In Component</h5>
            <p className="Component-Content">I have Child Component and it says: <ChildComponent /></p>
        </div>
    );
}

export default ParentComponent;