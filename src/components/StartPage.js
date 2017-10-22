import React, {Component} from 'react';

export class StartPage extends Component {

    handleInput = (event)=>{
        this.setState({inputValue:event.target.value})
    };
    handleSubmit = (event)=>{
        console.log(this.state.inputValue)
        event.preventDefault();

    };
    constructor(props){
        super(props);
        this.state = {inputValue:''};
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={this.handleInput}/>
        </form>
    }
}