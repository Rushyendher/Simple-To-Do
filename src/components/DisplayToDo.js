import React from "react";

export default class DisplayToDo extends React.Component{

    render(){
        const todos = this.props.allTodos;
        const listTodos = todos.map((todo) => {
            return(
                <li onDoubleClick={this.props.remove} 
                    key={todo} 
                    className="list-group-item list-group-item-success">
                        {todo}
                </li>)
        });

        return(
            <ul className="list-group">
                {listTodos}
            </ul>
        )
    }
}