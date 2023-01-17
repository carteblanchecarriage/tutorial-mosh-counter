import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    displayTotal = () => {
        const array = this.state.counters.map(counter => counter.value);
        const sum = array.reduce((a, b) => a + b)
        return sum
    }

    addPlayer = () => {
        const counters = [...this.state.counters];
        const allIndexes = counters.map(item => {
            return item.id;
        })
        const maxId = Math.max(...allIndexes)
        const newId = maxId + 1
        const newPlayer = { id: newId, value: 0 }
        counters.push(newPlayer)
        this.setState({ counters })
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    handleDelete = counter => {
        const items = [...this.state.counters];
        console.log(items)
        console.log(counter)
        const newOne = items.filter(() => {
            return Array.test !== counter;
        });
        const counters = newOne;
        this.setState({ counters })
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleReset} className="flex justify-center m-auto bg-green-400 w-48 rounded-lg text-md text-white text-bold px-5 py-2.5 my-4">Reset</button>
                <p className="text-center text-xl text-black underline">Total Number of Points: {this.displayTotal()}</p>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={counter}>
                        <h4 className="text-4xl font-bold">Person #{counter.id}</h4>
                    </Counter>
                )}
                <button type="button" onClick={this.addPlayer} className="flex justify-center items-center m-auto bg-green-400 rounded-lg text-md text-white text-bold px-6 py-2.5 my-4">Add</button>
            </div>
        );
    }
}

export default Counters;