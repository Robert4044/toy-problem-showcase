import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: '',
        };
    }

    handleChange(val) {
        this.setState({ userInput: val });
        // console.log(val);
    }

    palindrome(userInput) {
        let string = userInput;
        let reverseStr = userInput.split('').reverse().join('');
        if (string === reverseStr) {
            this.setState({ palindrome: 'true' });
        } else {
            this.setState({ palindrome: 'false' });
        }
    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input
                    type='text'
                    className='inputLine'
                    onChange={e => this.handleChange(e.target.value)}
                />
                <button
                    className='confirmationButton'
                    onClick={() => this.palindrome(this.state.userInput)}>
                    Check
                </button>
                <span className='resultsBox'>
                    Palindrome: {this.state.palindrome}
                </span>
            </div>
        );
    }
}
