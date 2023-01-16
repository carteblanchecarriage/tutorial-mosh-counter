import React, { Component } from 'react';

class Counter extends Component {

    getBadgeClasses = () => {
        let classes = "font-bold rounded-full text-sm px-5 py-2.5 text-center m-2";
        classes += (this.props.counter.value === 0) ? " bg-yellow-500 text-black" : " bg-blue-700 text-white";
        return classes;
    }

    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    render() {
        return (
            <div className="flex flex-col justify-center items-center mt-8">
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <div>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-bold rounded-lg text-sm px-5 py-2.5 text-center">Increment</button>
                    <button type="button" onClick={() => this.props.onDelete(this.props.counter.id)} className="bg-red-400 rounded-lg text-sm text-white text-bold hover:bg-red-300 px-5 py-2.5 my-2 ml-4 text-center">Delete</button>
                </div>
            </div >
        );
    }

}

export default Counter;