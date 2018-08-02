
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {},
    };
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development'],
  };

  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.title.value === '') {
      alert('Title is required.');
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value,
        },
      }, function() {
        this.props.addProject(this.state.newProject);
      });
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
     <div>
      <h3>Add Project</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label><br />
          <input type="text" ref="title" />
        </div>
        <div>
          <label>Category</label><br />
          <select ref="category">
            {categoryOptions}
          </select>
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
     </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AddProject;