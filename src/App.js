import React, {Component} from 'react';
import Header from "./components/header";
import TodoInput from "./components/todoinput";
import TodoItem from "./components/todoitem"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 0,
                    text: "Get some weed!"
                },
                {
                    id: 1,
                    text: "Happy New Year!"
                }
            ],
            nextId: 2
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({
            id: this.state.nextId,
            text: todoText
        });
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        })
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id),
            nextId: --this.state.nextId
        })
    }

    render() {
        return (
            <div className="App">
                <div className="todo-wrapper">
                    <div className="container">
                        <Header/>
                        <TodoInput todoText="" addTodo={this.addTodo}/>
                        <ul>
                            {
                                this.state.todos.map((todo) => {
                                    return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
