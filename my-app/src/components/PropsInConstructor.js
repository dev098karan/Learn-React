import React from 'react';

class PropsInConstructor extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Component">
                <h5 className="Component-Header">Props In Constructor</h5>
                <p className="Component-Content">I have a Constructor. It received Property = <span className="Special">{this.props.property}</span> for me.</p>
            </div>
        );
    }
}

export default PropsInConstructor;