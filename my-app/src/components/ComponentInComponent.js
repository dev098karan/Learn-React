import React from 'react';

function ChildComponent() {
    return <h2>I am a Child Component</h2>;
}

function ParentComponent() {
    return (
        <div>
            <h1>I have Child Component and it says:</h1>
            <ChildComponent />
        </div>
    );
}

export default ParentComponent;