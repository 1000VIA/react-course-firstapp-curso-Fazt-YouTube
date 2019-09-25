import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// data
import { todos } from "./todos.json";

// subcomponents
import TodoForm from "./components/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      onUpdate: false,
      edittedState: {}
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }

  updateTodo(i) {
    const arrTodos = this.state.todos;
    this.setState({
      edittedState: arrTodos[i],
      onUpdate: true
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <div className="card-body">{todo.responsible}</div>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">{todo.description}</div>
            <div className="card-footer">
              <div className="btn-counter">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.updateTodo.bind(this, i)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={this.removeTodo.bind(this, i)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm
                updateTodo={this.state.edittedState}
                onAddTodo={this.handleAddTodo}
                onUpdate={this.state.onUpdate}
              ></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
