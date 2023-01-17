import React, { Component } from 'react';

class Counter extends Component {

    getBadgeClasses = () => {
        let classes = "font-bold rounded-full text-sm px-5 py-2.5 text-center m-2";
        classes += (this.props.counter.value === 0) ? " bg-black text-white" : " bg-white text-black";
        return classes;
    }

    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    render() {
        return (
            <div className="flex flex-col justify-center items-center mt-8 m-auto max-w-md bg-pink-200 py-3 rounded-xl">
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <div>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} type="button" className="bg-pink-800 rounded-lg text-sm text-white text-bold hover:bg-pink-300 px-5 py-2.5 my-2 text-center">Increment</button>
                    <button type="button" onClick={() => this.props.onDelete(this.props.counter)} className="bg-pink-500 rounded-lg text-sm text-white text-bold hover:bg-pink-300 px-5 py-2.5 my-2 ml-2 text-center">Delete</button>
                </div>
            </div >
        );
    }

}

export default Counter;