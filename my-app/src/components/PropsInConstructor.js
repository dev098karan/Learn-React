import React from 'react';

class PropsInConstructor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>I have a Constructor. It received Property = {this.props.property} for me.</h1>
    }
}

export default PropsInConstructor;