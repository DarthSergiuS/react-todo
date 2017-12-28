import React, { Component } from 'react';
import './styles/todoitem.css'

class Todoitem extends Component {
    constructor(props) {
        super(props);
    }
    removeTodo(id) {
        this.props.removeTodo(id);
    }
    render() {
        return (
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(event) => this.removeTodo(this.props.id)}>remove</button>
                <div className="todoText">{this.props.todo.text}</div>
            </div>
        );
    }
}

export default Todoitem;
