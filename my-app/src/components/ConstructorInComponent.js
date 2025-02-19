import React from 'react';

class ConstructorInComponent extends React.Component {
    constructor() {
        super();
        this.state = { property: "World" };
    }
    render() {
        return <h1>I have a Constructor. It initialized Property = {this.state.property} for me.</h1>
    }
}

export default ConstructorInComponent;