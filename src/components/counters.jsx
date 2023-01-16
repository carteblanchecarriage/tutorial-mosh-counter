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

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter)
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

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters })
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleReset} className="flex justify-center m-auto bg-green-400 w-48 rounded-lg text-sm text-white text-bold px-5 py-2.5 my-4">Reset</button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={counter}>
                        <h4 className="text-4xl font-bold">Counter #{counter.id}</h4>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;