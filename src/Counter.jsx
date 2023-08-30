import React, { Component } from 'react';
import './counter.scss'

class Counter extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: props.initialValue
      };
   }

   handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
   };

   handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
   };

   handleReset = () => {
      this.setState({ count: this.props.initialValue });
   };

   render() {
      return (
         <div className='counter-app'>
            <button onClick={this.handleDecrement}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.handleIncrement}>+</button>
            <button className='btn' onClick={this.handleReset}>Reset</button>
         </div>
      );
   }
}

export default Counter;