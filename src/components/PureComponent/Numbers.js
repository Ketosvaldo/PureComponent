import React, { PureComponent } from 'react';
import './Numbers.css';

class Numbers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }
    handleOnChange = e =>{
        const arrayDigits = Array.from(String(e.target.value), Number);
        const sum = arrayDigits.reduce((previousValue, currentValue) => previousValue + currentValue);
        this.setState(previousState => ({
            array: [...previousState.array, sum]
        }))
    }
    render() {
        return (
            <div>
                <input type="number" onChange={this.handleOnChange}/>
                <ul className="numbers">{this.state.array.map((num) => <h3>{num}</h3>)}</ul>
            </div>
        );
    }
}

export default Numbers;