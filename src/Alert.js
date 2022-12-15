import React, { Component } from "react";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()} >{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
    }

    getStyle = () => {
        if (document.documentElement.classList.contains('dark'))
            return {
                color: '#a8d0e6',
            };
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }
}

// class WarningAlert extends Alert {
//     constructor(props) {
//         super(props);
//         this.color = 'coral';
//     }
// }

export { InfoAlert, ErrorAlert };

