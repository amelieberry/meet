import React, { Component } from "react";

class Alert extends Component {
    constructor(props) {
        super(props);
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return (
            <div className="Alert">
                <p className="rounded-lg shadow-sm shadow-orange" style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
    }

    getStyle = () => {
        return {
            color: 'blue',
            boxShadow: 'none',
            fontSize: '1rem',
        }
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }

    getStyle = () => {
        return {
            color: this.color,
            boxShadow: 'none',
        }
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        
    }
    getStyle = () => {
            return {
                border: '2px solid #b97551',
                padding: '10px',
            }
    }
}

export { InfoAlert, ErrorAlert, WarningAlert };

