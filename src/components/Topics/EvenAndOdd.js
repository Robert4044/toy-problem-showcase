import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        };
    }

    handleInput(value) {
        this.setState({
            userInput: value,
        });
    }

    handleEvenOrOdd(userInput) {
        let mainArr = userInput.split(',');
        let evenArr = [];
        let oddArr = [];
        mainArr.forEach(elem => {
            if (elem % 2 === 0) {
                evenArr.push(elem);
            } else {
                oddArr.push(elem);
            }
        });
        this.setState({
            evenArray: evenArr,
            oddArray: oddArr,
        });
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input
                    className='inputLine'
                    type='text'
                    placeholder='Type Here'
                    onChange={e => this.handleInput(e.target.value)}
                />
                <button
                    className='confirmationButton'
                    onClick={() => {
                        this.handleEvenOrOdd(this.state.userInput);
                    }}>
                    Split
                </button>
                <span className='resultsBox'>
                    {JSON.stringify(this.state.evenArray)}
                </span>
                <span className='resultsBox'>
                    {JSON.stringify(this.state.oddArray)}
                </span>
            </div>
        );
    }
}

export default EvenAndOdd;
