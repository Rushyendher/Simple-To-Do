import React from "react";

import DisplayToDo from "./DisplayToDo";

export default class WriteToDo extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            input: '',
            todos: [],
        }
    }

    removeToDo(event){
        let index = this.state.todos.indexOf(event.target.value);
        console.log(index,event.target.value);

        this.setState({
            todos: this.state.todos.splice(index,1),
        })
    }

    getToDo(event){
        this.setState({
            input: event.target.value,
        })
    }

    addToDo(){
        this.setState({
            todos: this.state.todos.concat(this.state.input),
            input:''
        })
    }
    
    render(){
        return(
            <div>
                <input value={this.state.input} type="text" onChange={this.getToDo.bind(this)}/>
                <button onClick={this.addToDo.bind(this)}>Add</button>
                <hr/>
                <DisplayToDo allTodos={this.state.todos} remove={this.removeToDo.bind(this)}/>
            </div>
        )
    }
}