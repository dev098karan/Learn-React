import React from 'react';

class StateObjectInConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {myColor: "red", myBackground: "yellow"};
    }

    changeColor = () => {
        if(this.state.myColor == "red") {
            this.setState({myColor: "blue"});
            document.getElementById("text").style.color = "blue";
        }
        else {
            this.setState({myColor: "red"});
            document.getElementById("text").style.color = "red";
        }
    }

    changeBackground = () => {
        if(this.state.myBackground == "yellow") {
            this.setState({myBackground: "lavender"});
            document.getElementById("text").style.backgroundColor = "lavender";
        }
        else {
            this.setState({myBackground: "yellow"});
            document.getElementById("text").style.backgroundColor = "yellow";
        }
    }

    render() {
        return (
            <div id="text">
                <h1>State Object:</h1>        
                <h2>My Color is {this.state.myColor} and My Background is {this.state.myBackground}.</h2>
                <div>
                    State Object's Methods:
                    <button onClick={this.changeColor}>Change Color</button>
                    <button onClick={this.changeBackground}>Change Background</button>
                </div>
            </div>
        );
    }
}

export default StateObjectInConstructor;