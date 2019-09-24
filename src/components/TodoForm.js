import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low",
      onEdit: "",
      nweTitle: "",
      nweResponsible: "",
      nweDescription: "",
      nwePriority: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputEdit = this.handleInputEdit.bind(this);

    console.log(props, this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    if (this.props.onUpdate) {
      this.setState({
        [name]: value
      });
    }

    this.setState({
      [name]: value
    });
  }

  handleInputEdit(event, prevProps) {
    console.log("Update");

    this.setState({
      onUpdate: false
    });

    // if (this.props.title !== prevProps.title) {
    //   this.onUpdate(this.props.title);
    // }
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={
                this.props.onUpdate
                  ? this.props.updateTodo.title
                  : this.state.title
              }
              onChange={this.handleInputChange}
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={
                this.props.onUpdate
                  ? this.props.updateTodo.responsible
                  : this.state.responsible
              }
              onChange={this.handleInputChange}
              placeholder="Responsible"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={
                this.props.onUpdate
                  ? this.props.updateTodo.description
                  : this.state.description
              }
              onChange={this.handleInputEdit}
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              value={
                this.props.onUpdate
                  ? this.props.updateTodo.priority
                  : this.state.priority
              }
              onChange={this.handleInputChange}
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
