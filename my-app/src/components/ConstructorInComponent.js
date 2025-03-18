import React from 'react';

class ConstructorInComponent extends React.Component {
    constructor() {
        super();
        this.state = { property: "World" };
    }
    render() {
        return (
            <div className="Component">
                <h5 className="Component-Header">Constructor In Component</h5>
                <p className="Component-Content">I have a Constructor. It initialized Property = <span className="Special">{this.state.property}</span> for me.</p>
            </div>
        );
    }
}

export default ConstructorInComponent;