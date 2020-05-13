import React from 'react';

//The initial state of Bomb should have a property called secondsLeft.

class Bomb extends React.Component {
     constructor(props) {
      super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        const message = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`

        return (
            <div>{message}</div>
        )
    }
}

export default Bomb