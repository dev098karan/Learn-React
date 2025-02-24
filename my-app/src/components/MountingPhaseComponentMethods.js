import React from 'react';

class MountingPhaseComponentMethods extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state with derivedProperty and a flag (updatedByComponentDidMount) to track if componentDidMount has updated the state.
        this.state = {
            derivedProperty: "Set in constructor() method",
            updatedByComponentDidMount: false
        };
    }

    // This method is called every time the component receives new props.
    static getDerivedStateFromProps(props, state) {
        // Only update state if it has not been updated by componentDidMount
        if (!state.updatedByComponentDidMount) {
            return {derivedProperty: props.property};
        }
        return null; // No state update
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                derivedProperty: "Set in componentDidMount() method",
                updatedByComponentDidMount: true
            })
        }, 3000)
    }

    render() {
        return <h1>I have one Property in State Object:- Property = {this.state.derivedProperty}.</h1>
    }
}

export default MountingPhaseComponentMethods;