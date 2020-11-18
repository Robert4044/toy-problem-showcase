import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            characters: [
                {
                    name: 'Thanos',
                    title: 'The Great Titan',
                    age: 957,
                },
                {
                    name: 'Newman',
                    age: 48,
                    title: 'nemesis',
                },
                {
                    name: 'Rigil Kentaurus',
                    title: 'Centauri A',
                },
            ],
            userInput: '',
            filteredCharacters: [],
        };
    }

    handleChange(val) {
        this.setState({
            userInput: val,
        });
    }

    filteredCharacters(userInput) {
        let characters = this.state.characters;
        let filteredCharacters = [];

        characters.forEach(elem => {
            if (elem.hasOwnProperty(userInput)) {
                filteredCharacters.push(elem);
            }
        });

        this.setState({ filteredCharacters: filteredCharacters });
        console.log(filteredCharacters);
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>
                    Original: {JSON.stringify(this.state.characters, null, 10)}
                </span>
                <input
                    type='text'
                    className='inputLine'
                    onChange={e => this.handleChange(e.target.value)}
                />
                <button
                    className='confirmationButton'
                    onClick={() =>
                        this.filteredCharacters(this.state.userInput)
                    }>
                    Filter
                </button>
                <span className='resultsBox filterObjectRB'>
                    Filtered:{' '}
                    {JSON.stringify(this.state.filteredCharacters, null, 10)}
                </span>
            </div>
        );
    }
}
