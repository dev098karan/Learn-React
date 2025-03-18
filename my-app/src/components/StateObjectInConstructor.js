import React from 'react';

class StateObjectInConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {myColor: "red", myBackground: "yellow"};
    }

    changeColor = () => {
        if(this.state.myColor === "red") {
            this.setState({myColor: "blue"});
            document.getElementById("text").style.color = "blue";
        }
        else {
            this.setState({myColor: "red"});
            document.getElementById("text").style.color = "red";
        }
    }

    changeBackground = () => {
        if(this.state.myBackground === "yellow") {
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
            <div className="Component">
                <h5 className="Component-Header">State Object In Constructor</h5>
                <div id="text" className="Component-Content">
                    <p><strong>State Object:</strong> My Color is <span className="Special">{this.state.myColor}</span> and My Background is <span className="Special">{this.state.myBackground}</span>.</p>        
                    <p><strong>State Object's Methods:</strong>
                        <button className="Button" onClick={this.changeColor}>Change Color</button>
                        <button className="Button" onClick={this.changeBackground}>Change Background</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default StateObjectInConstructor;